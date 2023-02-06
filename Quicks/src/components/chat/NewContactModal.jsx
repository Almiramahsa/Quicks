import React, { useRef } from 'react';
import { useContacts } from '../../contexts/ContactsProvider';

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h1 className="text-xl font-normal">Create Contact</h1>

              <button className="bg-transparent border-0 text-black float-right" onClick={() => closeModal()}>
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x</span>
              </button>
            </div>

            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <form onSubmit={handleSubmit} className="bg-white  border-slate-300 rounded-md px-4 pt-5 pb-4 mb-4 max-w-sm w-full mx-10 ">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Id
                  </label>
                  <input type="text" ref={idRef} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-1">Name</label>
                  <input ref={nameRef} required type="text" className="shadow appearance-none border rounded w-full py-2 px-1 text-black " />
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end m-5">
              <button type="submit" className="bg-sky-500 hover:bg-sky-700 rounded text-white font-bold py-2 px-6  sm:text-sm md:text-sm lg:w-text-md xl:w-text-md focus:outline-none focus:shadow-outline sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
