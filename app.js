
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title:' + argv.title)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function (){
        console.log('removing a new note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function (){
        console.log('listing a note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function (){
        console.log('reading a new note!')
    }
})

yargs.parse()

// console.log(yargs.argv);

