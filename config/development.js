module.exports = {
  log: {
    level: 'silly',
    disabled: false,
  },

  cors: {
    origins: ['https://localhost:5173'],
    maxAge: 3 * 60 * 60,
  }
};