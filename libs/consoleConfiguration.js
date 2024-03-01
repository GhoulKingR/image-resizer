let tempConsoleLog = console.log;
let tempConsoleError = console.error;

function disableConsole() {
  console.log = function() {};
  console.error = function() {};
}

function enableConsole() {
  console.log = tempConsoleLog;
  console.error = tempConsoleError;
}

module.exports = {
  disableConsole,
  enableConsole,
};