import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { addTodo, updateTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';

const options = [
  { value: 'important-asap', label: 'Important ASAP' },
  { value: 'offline-meeting', label: 'Offline Meeting' },
  { value: 'virtual-meeting', label: 'Virtual Meeting' },
  { value: 'asap', label: 'ASAP' },
  { value: 'client-related', label: 'Client Related' },
  { value: 'self-task', label: 'Self Task' },
  { value: 'appointments', label: 'Appointments' },
  { value: 'court-related', label: 'Court Related' },
];

const animatedComponents = makeAnimated();

const ToDoModal = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const [type, setType] = useState('add');
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
      setSelectedOptions(options.filter((option) => todo.status.includes(option.value)));
    } else {
      setTitle('');
      setDesc('');
      setSelectedOptions([]);
    }
  }, [type, todo]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please fill out all fields');
      return;
    }
    const status = selectedOptions.map((option) => option.value);
    if (title && desc && date) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            desc,
            date,
            time: new Date().toLocaleDateString(),
          })
        );
        toast.success('Task added successfully');
      } else {
        dispatch(updateTodo({ ...todo, title, status, desc, date }));
        toast.success('Task updated successfully');
      }
      setTitle('');
      setDesc('');
      setSelectedOptions([]);
      setIsModalOpen(false);
    } else {
      toast.error('Please fill out all fields');
      return;
    }
  };

  return (
    <div className="relative">
      <button type="button" className="bg-indigo-500 text-white py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>
        Add Task
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1000 flex items-center justify-center">
          <div className="bg-gray-200 max-w-500 w-90 mx-auto p-8 rounded flex flex-col">
            <button className="absolute top-0 right-0 mt-4 mr-4 transform-y-100% font-base text-lg p-2 rounded-lg bg-gray-100 hover:bg-red-600 hover:text-white z-10" onClick={() => setIsModalOpen(false)}>
              <MdOutlineClose />
            </button>
            <form onSubmit={(e) => handleSubmit(e)} className="w-full">
              <h2 className="text-black text-2xl font-bold mb-2 text-center text-capitalize">Add Task</h2>
              <label className="text-slate-600 text-sm">
                Title
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-0.5 mb-2 w-full p-2 bg-white font-normal" />
              </label>
              <label className="text-slate-600 text-sm">
                Date
                <input
                  type="datetime-local"
                  id="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="mt-0.5 mb-2 w-full p-2 bg-white font-normal"
                />
              </label>
              <label className="text-slate-600 text-sm">
                Descriptions
                <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="mt-0.5 mb-2 w-full p-2 bg-white font-normal" rows="5"></textarea>
              </label>
              <div className="justify-between">
                <label className="block">
                  <span className="text-slate-600 text-sm mb-3 ">Status</span>
                  <Select isMulti closeMenuOnSelect={false} components={animatedComponents} value={selectedOptions} onChange={handleChange} options={options} className="mt-0.5 mb-2 w-full" />
                </label>
              </div>
            </form>
            <div className="mt-8 flex items-center justify-end">
              <button onClick={() => setIsModalOpen(false)} type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                Cancel
              </button>
              <button type="submit" onClick={handleSubmit} className="bg-indigo-500 text-white py-2 px-4 mx-3 rounded">
                {type === 'add' ? 'Add Task' : 'Update Task'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ToDoModal;
