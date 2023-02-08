import React, { useState } from 'react';
import kilat from '../../src/assets/images/kilat.svg';
import task from '../../src/assets/images/task.svg';
import inbox from '../../src/assets/images/inbox.svg';
import { Link } from 'react-router-dom';

function Mainpage() {
  const [clicked, setClicked] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
    setShowButtons(!showButtons);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      {showButtons && (
        <>
          <Link to="/task">
            <button className={`bg-white rounded-full outline-1 p-2 hover:bg-slate-200 hover:animate-bounce ${clicked ? 'bg-white' : 'bg-blue-500'}`} onClick={handleButtonClick}>
              <img src={task} alt="task" width={36} />
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white rounded-full p-2 hover:bg-slate-200  hover:animate-bounce" onClick={handleButtonClick}>
              <img src={inbox} alt="task" width={36} />
            </button>
          </Link>
        </>
      )}
      <button className="bg-primary-blue rounded-full p-2 hover:bg-blue-400" onClick={handleButtonClick}>
        <img src={kilat} alt="kilat" width={36} />
      </button>
    </div>
  );
}
export default Mainpage;
