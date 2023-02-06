import React from 'react';
import Button, { SelectButton } from './Button';
import ToDoModal from './ToDoModal';
function AppHeader() {
  return (
    <div className="mx-auto max-w-750 w-full h-60 flex items-center justify-between">
      <SelectButton id="task">
        <option>My Task</option>
        <option>Team Task</option>
      </SelectButton>
      <button type="button" className="bg-indigo-500 text-white py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>
        Add Task
      </button>
      <ToDoModal />
    </div>
  );
}

export default AppHeader;
