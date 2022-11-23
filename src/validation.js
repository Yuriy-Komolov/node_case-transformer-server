
const cases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

const validation = (text = '', toCase = '') => {
  const errors = [];

  if (!text) {
    errors.push({ message: 'Text to convert is required. '
    + 'Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".' });
  }

  if (toCase === null) {
    errors.push({ message: '"toCase" query param is required. '
    + 'Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".' });
  }

  if (!cases.includes(toCase) && typeof toCase === 'string') {
    errors.push({ message: 'This case is not supported. '
    + 'Available cases: SNAKE, KEBAB, CAMEL, PASCAL, UPPER.' });
  }

  return { errors };
};

module.exports = {
  validation,
};