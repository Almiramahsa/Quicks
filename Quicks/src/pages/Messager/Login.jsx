import React, { useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-screen justify-center items-center ">
        <img className="animate-pulse" src={logo} alt="logo" width={150}></img>
        <form onSubmit={handleSubmit} className="bg-white shadow-md  border-slate-300 rounded-md px-8 pt-10 pb-8 mb-4 max-w-sm w-full mx-10 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input type="text" ref={idRef} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-700 rounded-full text-white font-bold py-2 px-6  sm:text-sm md:text-sm lg:w-text-md xl:w-text-md focus:outline-none focus:shadow-outline sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"
            >
              Sign In
            </button>
            <a onClick={createNewId} className="inline-block align-baseline font-normal text-sm text-gray-400 hover:text-slate-800" href="#">
              Create New Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
