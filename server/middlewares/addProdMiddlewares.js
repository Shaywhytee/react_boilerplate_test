const path = require('path');
const express = require('express');
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(express.static(outputPath));

  // Add headers middleware
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://honesteditz.herokuapp.com');
    // Set other headers as needed
    next();
  });

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
