// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(
//         '/join',
//         createProxyMiddleware({
//             target: 'http://13.209.74.21:8080',
//             changeOrigin: true,
//         })
//     );

//     app.use(
//         '/login',
//         createProxyMiddleware({
//             target: 'http://13.209.74.21:8080',
//             changeOrigin: true,
//         })
//     );
// };