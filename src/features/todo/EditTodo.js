import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../config/firebaseConfig";
import { todoStatus } from "../../constant/todoStatus";

const EditTodo = () => {
  const [params] = useSearchParams();
  const todoId = params.get("id");
  const navigate = useNavigate();

  const [value, setValue] = useState({});
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    async function getData() {
      const colRef = doc(db, "todos", todoId);
      const result = await getDoc(colRef);
      setValue(result.data());
      setProgress(result.data().status);
      setName(result.data().name);
    }
    getData();
  }, [todoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, progress });

    try {
      const docRef = doc(db, "todos", todoId);

      await updateDoc(docRef, {
        name: name,
        status: Number(progress),
      });
      toast.success("Upadte success");
      navigate("/todo");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="z-20 p-4 w-[500px] bg-white rounded-lg shadow-sm absolute left-[50%]  -translate-x-[50%] "
        >
          <input
            type="text"
            value={name}
            className="w-full mt-4 border border-pink-600 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex items-center w-full gap-10 mt-2 ">
            <div className="flex gap-x-2">
              <label htmlFor="todo"> Todo</label>
              <input
                id="todo"
                type="radio"
                name="timeline"
                value={todoStatus.todo}
                checked={value.status === todoStatus.todo}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="hidden ml-4"
              />
              {todoStatus.todo === progress ? (
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 border "></div>
              ) : (
                <>
                  <div
                    onClick={() => setProgress(1)}
                    className="w-[20px] h-[20px] border rounded-full border-pink-500"
                  ></div>
                </>
              )}
            </div>

            <div className="flex items-center gap-x-2">
              <label htmlFor="inProgress">In-progress</label>
              <input
                id="inProgress"
                type="radio"
                name="timeline"
                // checked={value.status === todoStatus.progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                value={todoStatus.progress}
                className="hidden ml-4"
              />
              {todoStatus.progress === progress ? (
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 border "></div>
              ) : (
                <>
                  <div
                    onClick={() => setProgress(2)}
                    className="w-[20px] h-[20px] border rounded-full border-pink-500"
                  ></div>
                </>
              )}
            </div>

            <div className="flex items-center gap-x-2">
              <label htmlFor="done">Done</label>
              <input
                id="done"
                type="radio"
                name="timeline"
                value={todoStatus.complete}
                className="hidden ml-4"
                checked={value.status === todoStatus.complete}
                onChange={(e) => setProgress(Number(e.target.value))}
              />
              {todoStatus.complete === progress ? (
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 border "></div>
              ) : (
                <>
                  <div
                    onClick={() => setProgress(3)}
                    className="w-[20px] h-[20px] border rounded-full border-pink-500"
                  ></div>
                </>
              )}
            </div>
          </div>
          <div className="flex float-right mt-10 mr-5 gap-x-5">
            <button
              onClick={() => navigate("/todo")}
              className="px-4 py-1 font-bold text-white bg-red-600 rounded-sm"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-1 text-white bg-blue-500 rounded-sm"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTodo;
