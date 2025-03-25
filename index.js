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

// Addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid input for addition');
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  logger.info(`Addition requested: ${num1} + ${num2}`);
  res.json({ result: num1 + num2 });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid input for subtraction');
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  logger.info(`Subtraction requested: ${num1} - ${num2}`);
  res.json({ result: num1 - num2 });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid input for multiplication');
    return res.status(400).json({ error: 'Invalid numbers' });
  }

  logger.info(`Multiplication requested: ${num1} * ${num2}`);
  res.json({ result: num1 * num2 });
});

// Division
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid input for division');
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  if (num2 === 0) {
    logger.error('Division by zero attempted');
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  logger.info(`Division requested: ${num1} / ${num2}`);
  res.json({ result: num1 / num2 });
});

app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
