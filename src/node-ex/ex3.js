const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter { }
const customEmitter = new CustomEventEmitter();
function simulateUserLogin(userId) {
  const randomDelay = Math.random() * (2 - 0.1) + 0.1;

  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', userId);
    simulateUserLogout(userId);
  }, randomDelay * 1000);
}
function simulateUserLogout(userId) {
  const randomDelay = Math.random() *
    (2 - 0.1) + 0.1;
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();

    console.log(`${timestamp}: USER_${userId} logged out`);

    customEmitter.emit('userLoggedOut', userId); simulateUserLogin(userId + 1);
  }, randomDelay * 1000);
}
// Event listeners
customEmitter.on('userLoggedIn', (userId) => {
  console.log(`User ${userId} has logged in.`);
});
customEmitter.on('userLoggedOut', (userId) => {
  console.log(`User ${userId} has logged out.`);
});
console.log('Simulation started...'); simulateUserLogin(1);
