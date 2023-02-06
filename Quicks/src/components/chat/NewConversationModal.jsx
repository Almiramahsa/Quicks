import React from 'react';

export default function NewConversationModal() {
  return (
    <div className="fixed top-0 left-0 hidden overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div className="relative pointer-events-none">
        <div className="relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md shadow-lg">
          <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              Modal title
            </h5>
            <button type="button" className="w-4 h-4 p-1 text-black border-none rounded-none opacity-50 hover:text-black hover:opacity-75 hover:no-underline" data-toggle="modal" aria-label="Close"></button>
          </div>
          <div className="p-4">
            <p>This is a vertically centered modal.</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-toggle="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
