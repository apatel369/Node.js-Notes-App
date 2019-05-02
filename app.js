
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function (argv){
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

