const fs = require('fs')
const chalk = require('chalk')

//adding note
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }  
}

//removing note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes:"))
    notes.forEach((note) => console.log(note.title))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(readNote){
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body)
    }
    else {
        console.log(chalk.red.inverse('no note found'))
    }
}
  
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
