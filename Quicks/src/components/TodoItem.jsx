import React from 'react';
import { getClasses } from '../utils/getClasess';

function TodoItem({ todo }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white mb-1.5 rounded-lg last:mb-0">
      <div className="flex items-center justify-start gap-1">
        [ ]
        <div className="flex flex-col overflow-hidden">
          <p className={getClasses(['text-black-2', 'font-medium', 'text-lg', 'break-all', todo.status === 'complete' ? 'line-through opacity-75' : ''])}>{todo.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
