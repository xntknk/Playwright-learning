function generateRandomUsername() {
  return 'user_' + Math.random().toString(36).substring(2, 8);
}

function generateRandomPassword(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

module.exports = {
  generateRandomUsername,
  generateRandomPassword,
};
