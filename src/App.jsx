import React, { useState } from "react";

const App = () => {
  const [newTitle, setNewTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [allTodo, setAllTodo] = useState([]);

  const addTodo = () => {
    if (newTitle && desc) {
      const newTodo = {
        title: newTitle,
        desc,
      };
      setAllTodo([...allTodo, newTodo]);
      setNewTitle("");
      setDesc("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = allTodo.filter((_, i) => i !== index);
    setAllTodo(updatedTodos);
  };

  return (
    <div className="page bg-gradient-to-r from-slate-500 to-slate-800 h-screen w-screen flex justify-center items-center">
      <div className="box bg-blue-200 h-2/3 w-1/3 shadow-2xl rounded-3xl border-4 text-center p-8 overflow-y-scroll">
        <h2 className="text-black-300 font-bold text-4xl">My ToDo</h2>

        <div className="input mt-8 flex flex-row justify-center items-center gap-4">
          <div className="todo flex flex-col gap-4">
            <label className="flex flex-col items-start">
              <span className="font-semibold">Title</span>
              <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                className="w-80 rounded-lg p-2"
              />
            </label>
            <label className="flex flex-col items-start">
              <span className="font-semibold">Description</span>
              <input
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                type="text"
                className="w-80 rounded-lg p-2"
              />
            </label>
            <button onClick={addTodo} className="bg-green-500 p-2 rounded-xl">
              ADD
            </button>
          </div>
        </div>

        <div className="task-list mt-8">
          {allTodo.length > 0 ? (
            allTodo.map((item, index) => (
              <div
                key={index}
                className="taskinfo border-blue-300 w-full h-30 bg-blue-300 p-5 flex flex-row justify-between items-center mt-5"
              >
                <div className="task1">
                  <h2 className="font-bold text-indigo-600 text-2xl">
                    {item.title}
                  </h2>
                  <h3 className="mt-2 font-semibold">{item.desc}</h3>
                </div>

                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 text-white p-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="mt-4">No tasks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
