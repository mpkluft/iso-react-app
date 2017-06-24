import mongoose from 'mongoose';

import '../models.js';

const Note = mongoose.model('Note');

export function setUpConnection() {
  mongoose.connect(`mongodb://localhost/notes`);
}

export function listNotes() {
  return Note.find();
}

export function createNote(data) {
  const note = new Note({
    title: data.title,
    text: data.text,
    createdAt: new Date()
  });

  return note.save();
}

export function createNote(id) {
  return note.findById(id).remove();
}