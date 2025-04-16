const API_BASE = 'http://localhost:3001';

// Basic frontend logic to demonstrate creating groups and notes
const groupsListEl = document.getElementById('groupsList');
const groupForm = document.getElementById('groupForm');
const noteForm = document.getElementById('noteForm');

// Fetch and render groups
async function fetchGroups() {
  const res = await fetch(`${API_BASE}/api/groups`);
  const data = await res.json();
  renderGroups(data);
}

function renderGroups(groups) {
  groupsListEl.innerHTML = '';
  groups.forEach(group => {
    const li = document.createElement('li');
    li.textContent = `${group.name} (${group.isPublic ? 'Public' : 'Private'})`;
    groupsListEl.appendChild(li);
  });
}

// Handle group creation
groupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('groupName').value;
  const description = document.getElementById('groupDescription').value;
  const isPublic = document.getElementById('groupPublic').checked;

  await fetch(`${API_BASE}/api/groups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, isPublic })
  });

  groupForm.reset();
  fetchGroups();
});

// Handle note creation
noteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const groupId = document.getElementById('noteGroupId').value;
  const title = document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;

  await fetch(`${API_BASE}/api/groups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ groupId, title, content })
  });

  noteForm.reset();
});

fetchGroups();
