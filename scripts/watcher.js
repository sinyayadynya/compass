const chokidar = require('chokidar');
const { exec } = require('child_process');
const sass = require('sass');
const fs = require('fs');

const compileSCSS = () => {
    sass.render(
        {
            file: './src/styles.scss',
            // outFile: './src/temp/styles.scss',
        },
        function (error, result) {
            if (!error) {
                fs.writeFile(
                    './src/temp/styles.css',
                    result.css,
                    function (err) {
                        if (!err) {
                            console.log('SCSS compiled successfully!');
                            // Process with Tailwind after successful SCSS compilation
                            exec(
                                'bun tailwindcss -i ./src/temp/styles.css -o ./dist/styles.css',
                                (error, stdout, stderr) => {
                                    if (error) {
                                        console.error(`exec error: ${error}`);
                                        return;
                                    }
                                    console.log(stdout);
                                }
                            );
                        } else {
                            console.error('Error writing compiled CSS:', err);
                        }
                    }
                );
            } else {
                console.error('Error compiling SCSS:', error);
            }
        }
    );
};

const watcher = chokidar.watch([
    'src/**/*.scss',
    'components/**/*.scss', // Include this line to watch .scss files in components
    'templates/**/*.html.twig',
    'images/**/*.svg',
]);

watcher.on('change', (path) => {
    console.log(`File ${path} has been changed`);
    compileSCSS(); // Compiling SCSS on any .scss file change
});

console.log('Watching for changes...');
