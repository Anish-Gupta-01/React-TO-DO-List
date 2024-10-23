import React, { useState } from 'react';

export default function AddTask() {
  const [tasks, setTasks] = useState([]); // State for the list of tasks
  const [newTask, setNewTask] = useState(''); // State for the new task input
  const [isEditing, setIsEditing] = useState(false); // State to check if a task is being edited
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); // Store the index of the task being edited
  const [successMessage, setSuccessMessage] = useState(''); // Message for task feedback

  // Function to handle adding or updating a task
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks

    if (isEditing) {
      // Update the task if it's in editing mode
      const updatedTasks = [...tasks];
      updatedTasks[currentTaskIndex] = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentTaskIndex(null);
      setSuccessMessage('Task updated successfully!');
    } else {
      setTasks([...tasks, newTask]); // Add new task to the list
      setSuccessMessage('Task added successfully!');
    }

    setNewTask(''); // Clear the input field
    setTimeout(() => setSuccessMessage(''), 1500); // Clear the success message after 3 seconds
  };

  // Function to handle editing a task
  const handleEditTask = (index) => {
    setNewTask(tasks[index]); // Set the input value to the current task
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(filteredTasks); // Remove the task from the list
    setSuccessMessage('Task deleted successfully!');
    setTimeout(() => setSuccessMessage(''), 1500); // Clear the success message after 3 seconds
  };

  return (
    <div className='container mx-auto p-5'>
      <div className='flex justify-center py-3 bg-green-200 rounded-md'>
        <div className='addTodo py-5'>
          <h1 className='text-4xl text-center font-bold pb-5'>Add Your TO-DO</h1>

          {/* Success message */}
          {successMessage && (
            <div className='text-green-700 mb-3 p-2 bg-green-100 rounded-md'> {successMessage} </div>
          )}

          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
            className='px-3 py-3 rounded-s-md w-96 outline-none border border-gray-300' placeholder='Write Your TO-DOs...'/>

          <button onClick={handleAddTask} className={`px-3 bg-yellow-400 rounded-e-md my-5 py-3 w-30 border border-gray-400 hover:bg-yellow-500 transition ${ newTask.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={newTask.trim() === ''}>{isEditing ? 'Update' : 'Add'} </button>

          {/* Task List */}
          <div className='todos py-1'>
            <h2 className='font-bold font-mono text-2xl text-red-400'>Your Task Lists</h2>
            {tasks.length === 0 ? (
              <p className='text-gray-500 py-4 text-xl'>No tasks available. Add a new task to get started!</p>
            ) : (
              tasks.map((task, index) => (
                <div key={index} className='todo-text flex items-center justify-between mb-2'>
                  <div className='text bg-yellow-300 rounded-md px-3 py-1 w-full'>{task}</div>
                  <div className='flex items-center'>
                    <button onClick={() => handleEditTask(index)} className={`px-3 py-1 bg-green-400 rounded-md m-2 hover:bg-green-500 transition ${ isEditing && currentTaskIndex !== index ? 'opacity-50 cursor-not-allowed' : '' }`} disabled={isEditing && currentTaskIndex !== index}>Edit</button>
                    <button onClick={() => handleDeleteTask(index)} className='px-3 py-1 bg-red-400 rounded-md text-white hover:bg-red-500 transition'> Delete </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
