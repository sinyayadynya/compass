import { createServer } from 'http';
import { readFileSync, watch } from 'fs';

const PORT = 3000;
let clients = [];

// Create a server to serve the assets and handle SSE
const server = createServer((req, res) => {
    if (req.url === '/styles.css') {
        const css = readFileSync('./dist/styles.css', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(css);
    } else if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*' // This allows any origin to access the resource
        });
        clients.push(res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Watch for changes in the dist directory (compiled assets)
watch('./dist', (eventType, filename) => {
    if (filename) {
        console.log(`${filename} has been changed in dist. Reloading...`);
        clients.forEach(client =>
            client.write(`data: ${filename} changed in dist\n\n`)
        );
    }
});

// Watch for changes in the templates directory (Twig templates)
watch('templates', { recursive: true }, (eventType, filename) => {
    if (filename) {
        console.log(`${filename} has been changed in templates. Reloading...`);
        clients.forEach(client =>
            client.write(`data: ${filename} changed in templates\n\n`)
        );
    }
});
