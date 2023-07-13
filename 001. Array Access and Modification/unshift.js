// const numbers = [3, 4, 5];

// numbers.unshift(1, 2);
// console.log(numbers);

const log = [];

function addLogEntry(entry) {
  log.unshift(entry);
  console.log("Log entry added:", entry);
}

addLogEntry("Log entry 1");
addLogEntry("Log entry 2");

console.log(log);
