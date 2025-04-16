import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StuddyBuddyApp() {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [notes, setNotes] = useState({});
  const [tasks, setTasks] = useState({});
  const [newNote, setNewNote] = useState("");
  const [newTask, setNewTask] = useState("");

  const createGroup = () => {
    if (!newGroup.trim()) return;
    setGroups([...groups, newGroup]);
    setNotes({ ...notes, [newGroup]: [] });
    setTasks({ ...tasks, [newGroup]: [] });
    setNewGroup("");
  };

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes({
      ...notes,
      [selectedGroup]: [...notes[selectedGroup], newNote],
    });
    setNewNote("");
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks({
      ...tasks,
      [selectedGroup]: [...tasks[selectedGroup], { text: newTask, done: false }],
    });
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks[selectedGroup]];
    updated[index].done = !updated[index].done;
    setTasks({ ...tasks, [selectedGroup]: updated });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-semibold">Create a Study Group</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Group name"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            />
            <Button onClick={createGroup}>Create</Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {groups.map((g) => (
              <Button
                key={g}
                variant={selectedGroup === g ? "default" : "outline"}
                onClick={() => setSelectedGroup(g)}
              >
                {g}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedGroup && (
        <>
          <Card>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-lg font-medium">Notes for {selectedGroup}</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <Button onClick={addNote}>Add</Button>
              </div>
              <ul className="list-disc pl-5">
                {notes[selectedGroup]?.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-lg font-medium">Tasks for {selectedGroup}</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button onClick={addTask}>Add</Button>
              </div>
              <ul className="pl-2 space-y-1">
                {tasks[selectedGroup]?.map((task, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer ${task.done ? "line-through text-gray-500" : ""}`}
                    onClick={() => toggleTask(i)}
                  >
                    {task.text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
