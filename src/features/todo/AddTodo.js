import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../config/firebaseConfig";
import { todoStatus } from "../../constant/todoStatus";

const AddTodo = ({ setShow }) => {
  const [value, setValue] = useState("");
  const [progress, setProgress] = useState(1);

  console.log(progress);

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ value, progress });

    if (value.length < 2) {
      toast.error("Not empty");
      return;
    }
    const colRef = collection(db, "todos");

    await addDoc(colRef, {
      name: value,
      status: Number(progress),
      createdAt: serverTimestamp(),
    });
    toast.success("Add success");
  };
  return (
    <div className="transition-opacity">
      <div className="fixed inset-0 z-10 bg-slate-400 opacity-60"></div>
      <form
        onSubmit={handleSubmit}
        className="z-20 p-4 w-[500px] bg-white rounded-lg shadow-xl absolute left-[50%] top-[50%]   -translate-x-[50%] -translate-y-[50%]"
      >
        <h1 className="mb-4 text-3xl font-bold text-center text-pink-700">
          Form add todo
        </h1>
        <input
          type="text"
          className="w-full mt-4 border border-pink-600 rounded-lg"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center w-full gap-10 mt-2 ">
          <div className="">
            <label htmlFor="todo"> Todo</label>
            <input
              id="todo"
              type="radio"
              name="timeline"
              value={todoStatus.todo}
              onChange={(e) => setProgress(e.target.value)}
              className="ml-4"
            />
          </div>

          <div className="">
            <label htmlFor="inProgress">In-progress</label>
            <input
              id="inProgress"
              type="radio"
              name="timeline"
              onChange={(e) => setProgress(e.target.value)}
              value={todoStatus.progress}
              className="ml-4"
            />
          </div>

          <div>
            <label htmlFor="done">Done</label>
            <input
              id="done"
              type="radio"
              name="timeline"
              value={todoStatus.complete}
              onChange={(e) => setProgress(e.target.value)}
              className="ml-4"
            />
          </div>
        </div>
        <div className="flex float-right mt-10 mr-5 gap-x-5">
          <button
            className="px-4 py-1 font-bold text-white bg-red-600 rounded-sm"
            onClick={() => setShow(false)}
          >
            close
          </button>
          <button className="px-4 py-1 text-white bg-blue-500 rounded-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
