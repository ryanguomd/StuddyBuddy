// A minimal Express server to illustrate basic StudySync API endpoints
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Mock in-memory data
let groups = [];
let notes = [];

// --- GROUP ROUTES ---
app.post('/api/groups', (req, res) => {
  const { name, description, isPublic } = req.body;
  const newGroup = {
    id: Date.now(),
    name,
    description,
    isPublic: isPublic || false,
    members: []
  };
  groups.push(newGroup);
  res.json(newGroup);
});

app.get('/api/groups', (req, res) => {
  res.json(groups);
});

// --- NOTES ROUTES ---
app.post('/api/notes', (req, res) => {
  const { groupId, title, content } = req.body;
  const newNote = {
    id: Date.now(),
    groupId,
    title,
    content
  };
  notes.push(newNote);
  res.json(newNote);
});

app.get('/api/notes', (req, res) => {
  const { groupId } = req.query;
  if (groupId) {
    return res.json(notes.filter(note => note.groupId === parseInt(groupId, 10)));
  }
  res.json(notes);
});

app.listen(port, () => {
  console.log(`StudySync API server running at http://localhost:${port}`);
});
