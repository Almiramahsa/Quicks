import React, { useState, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import Modal from 'react-modal';
import { v4 as uuidV4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../../assets/css/app.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.20)',
  },
};

export default function Login({ onIdSubmit }) {
  const idRef = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idUser, setIdUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idUser);
  };

  const createNewId = () => {
    setModalIsOpen(true);
  };

  const generateId = () => {
    setIdUser(uuidV4());
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-screen justify-center items-center ">
        <img className="animate-pulse" src={logo} alt="logo" width={150} />
        <form onClick={handleSubmit} className="bg-white shadow-md  border-slate-300 rounded-md px-8 pt-10 pb-8 mb-4 max-w-sm w-full mx-10 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              id="username"
              type="text"
              value={idUser}
              ref={idRef}
              required
              onChange={(e) => setIdUser(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <button required type="submit" className=" text-white py-2 px-4 rounded bg-primary-blue p-2 hover:bg-blue-400">
                Sign In
              </button>
            </Link>

            <a onClick={createNewId} className="inline-block align-baseline font-normal text-sm text-gray-400 hover:text-slate-800" href="#">
              Get New Id
            </a>
          </div>
        </form>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles} contentLabel="Generate User ID Modal">
        <h2 className="font-bold mb-2">Generate User ID</h2>
        <p className="mb-6">Are you sure you want to generate a new User ID?</p>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
          <button className="text-white py-2 px-4 rounded bg-primary-blue p-2 hover:bg-blue-400 " onClick={generateId}>
            Generate
          </button>
        </div>
      </Modal>
    </div>
  );
}
