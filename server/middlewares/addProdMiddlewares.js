const path = require('path');
const express = require('express');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

module.exports = function addProdMiddlewares(app, options) {
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // Apply rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
  });
  app.use(limiter);

  app.use(compression());
  app.use(express.static(outputPath));
  // Request Headers
  app.use((req, res, next) => {
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://honesteditz.herokuapp.com',
    );
    next();
  });

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
