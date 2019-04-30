const validator = require('validator')

const getNotes = require('./notes.js/index.js')

const msg = getNotes();

console.log(validator.isURL('https://swamiji.com'));
