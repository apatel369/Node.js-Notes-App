
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
    handler(argv){
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
    handler(argv){
        notes.removeNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler(){
        console.log('reading a new note!')
    }
})

yargs.parse()

// console.log(yargs.argv);

