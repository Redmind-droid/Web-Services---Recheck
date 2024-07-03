module.exports = {
  log: {
    level: 'info',
    disabled: false,
  },

  cors: {
    origins: ['https://localhost:5173'],
    maxAge: 3 * 60 * 60,
  }
}