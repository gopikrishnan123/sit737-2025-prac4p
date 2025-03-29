const express = require('express');
const app = express();
const port = 3000;

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Middleware to get raw IP
app.set('trust proxy', true);

// Addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error({
      message: 'Invalid input for addition',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      status: 400
    });
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  const result = num1 + num2;
  logger.info({
    message: 'Addition operation',
    ip: req.ip,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    status: 200,
    response: { result }
  });

  res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error({
      message: 'Invalid input for subtraction',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      status: 400
    });
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  const result = num1 - num2;
  logger.info({
    message: 'Subtraction operation',
    ip: req.ip,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    status: 200,
    response: { result }
  });

  res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error({
      message: 'Invalid input for multiplication',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      status: 400
    });
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  const result = num1 * num2;
  logger.info({
    message: 'Multiplication operation',
    ip: req.ip,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    status: 200,
    response: { result }
  });

  res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error({
      message: 'Invalid input for division',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      status: 400
    });
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  if (num2 === 0) {
    logger.error({
      message: 'Division by zero attempted',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      status: 400
    });
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  const result = num1 / num2;
  logger.info({
    message: 'Division operation',
    ip: req.ip,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    status: 200,
    response: { result }
  });

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
