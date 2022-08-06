const express = require("express");
const { append } = require("express/lib/response");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = process.env.PORT || 5050;

const app = express();

const options = {
  target: "https://github.com", //Base url to be proxied
  changeOrigin: true,
  ws: true, //web socket enabled
  secure: false, // HTTP and HTTPS are allowed
};

const proxyServer = createProxyMiddleware(options);

app.use(proxyServer);

app.listen(port, () => {
  console.log(`Proxy running at ${port}...`);
});
