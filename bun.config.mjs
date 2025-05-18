export default {
    // For styles
    styles: {
        input: 'src/styles.css',
        output: 'dist/styles.css',
    },
    // For JavaScript
    scripts: {
        input: 'src/main.js', // Your entry JavaScript file
        output: 'dist/main.bundle.js', // The bundled output file
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
    },
};
