import React from "react";

interface TaskProps {
  task: { id: number; text: string; checked: boolean };
  handleCheck: (id: number) => void;
  // Optional delete handler
}

const Task: React.FC<TaskProps> = ({ task, handleCheck }) => {
  return (
    <div key={task.id} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => handleCheck(task.id)}
        className="accent-blue-500"
      />
      <span
        className={`font-sans task-text text-lg ${
          task.checked ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
    </div>
  );
};

export default Task;
