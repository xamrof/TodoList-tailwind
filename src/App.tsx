import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBarx";
import Button from "./Components/Button";
import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState<
    { id: number; text: string; checked: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, checked: false }]);
    setInputValue("");
  };

  const handleEditClick = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const handleDeleteClick = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheck = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="task-text p-10 bg-white rounded-2xl shadow-md">
        <div className="inline-flex items-center gap-4 mb-6">
          <SearchBar value={inputValue} onChange={handleSearchChange} />
          <Button
            iconName="add"
            iconProps="w-10 h-10"
            onClick={handleAddClick}
          />
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-2">
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        //SAVE ON ENTER
                        handleEditClick(task.id, editingText);
                        setEditingTaskId(null);
                      }
                    }}
                    onBlur={() => {
                      //SAVE ON MAKE A CLICK OUTSIDE
                      handleEditClick(task.id, editingText);
                      setEditingTaskId(null);
                    }}
                    className="border rounded p-1"
                    autoFocus
                  />
                  <Button
                    iconName="save"
                    onClick={() => {
                      handleEditClick(task.id, editingText);
                      setEditingTaskId(null);
                    }}
                  />
                </>
              ) : (
                <Task task={task} handleCheck={handleCheck} />
              )}
              <div className="flex gap-2 ml-auto">
                {editingTaskId !== task.id && (
                  <Button
                    iconName="edit"
                    onClick={() => {
                      setEditingTaskId(task.id);
                      setEditingText(task.text);
                    }}
                  />
                )}
                <Button
                  iconName="delete"
                  onClick={() => handleDeleteClick(task.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
