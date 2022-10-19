import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { db } from "../config/firebaseConfig";
import { todoStatus } from "../constant/todoStatus";
import AddTodo from "../features/todo/AddTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    function fetchData() {
      const colRef = collection(db, "todos");
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setTodos(results);
      });
    }

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const colRef = doc(db, "todos", id);
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <div className="container relative">
        <div className="w-[800px] mx-auto">
          <button
            onClick={() => setShow(true)}
            className="inline-block px-4 py-2 mx-auto font-bold text-white bg-blue-500 rounded mt-7 "
          >
            Add todo
          </button>
        </div>

        {show && <AddTodo setShow={setShow} show={show} name="Add todo" />}

        {todos?.map((item) => (
          <div key={v4()} className="form-group">
            <div className="w-full  max-w-[800px] mx-auto mt-2">
              <div className="flex items-center w-full mx-auto gap-x-5">
                <div className="relative w-full">
                  <div className="w-full h-[40px] p-2 mt-4 border border-pink-500 rounded-lg focus:outline-none focus:border-none">
                    {item.name}
                  </div>
                  <div className="absolute top-[45%]  right-3 ">
                    {new Date(
                      item?.createdAt?.seconds * 1000
                    ).toLocaleDateString("vi-VI")}
                  </div>
                </div>
                <label className="w-[150px] py-1 font-bold text-slate-600 px-1 mt-4 text-sm rounded-md text-center border border-pink-500 bg-green">
                  {item.status === todoStatus.todo && <>Todo</>}
                  {item.status === todoStatus.progress && <>In-Progress</>}
                  {item.status === todoStatus.complete && <>Done</>}
                </label>

                <div className="flex items-center h-[42px] mt-4   gap-x-4">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="h-full px-4 border border-pink-500 rounded-lg "
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/update?id=${item.id}`)}
                    className="w-full h-full px-4 transition-all border border-pink-500 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div
                className={`h-[5px] ${
                  item.status === 1
                    ? " w-[12px]"
                    : item.status === 2
                    ? " w-[260px] "
                    : "w-[508px]"
                } rounded-lg border border-green-500 bg-green-500 mt-1 `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
