import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import Card from "./../UI/Card";
// import { task } from "./data";

// let users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg",
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/5-image.jpg",
//   },
// ];

const index = () => {
  const [tasks, setTask] = useState([
    { id: 1, title: "lorem ipsum ..", time: "2022.05.18" },
  ]);

  const baseUrl = "http://localhost:3000";

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const addTask = () => {
    const check = {
      title: title.trim().length === 0,
      time: time.trim().length === 0,
    };

    const newTask = {
      title: title, 
      time: time,
    };
    console.log(newTask);

    if (check.title || check.time) {
      toast.error("Please fill in the field", {
        position: "top-right",
        autoClose: "1000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      fetch(`${baseUrl}/userlist`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      toast.success("Added Successfully", {
        position: "top-right",
        autoClose: "1000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setTitle("");
    setTime("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((e) => {
      return e.id !== id;
    });

    setTask(newTasks);
    toast.dark("Task removed"),
      {
        position: "top-right",
        autoClose: "1000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      };
  };

  return (
    <>
      <ToastContainer />
      <main>
        <div className="container">
          <div className="card p-3 shadow mt-5 bg-secondary col-8 mx-auto">
            <div className="card p-3">
              <form
                action="#"
                className="form w-100 d-flex flex-column align-items-center"
              >
                <label
                  htmlFor=""
                  className="w-100 col-12 text-center fw-bold my-3"
                >
                  Task title
                  <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Enter Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label
                  htmlFor=""
                  className="w-100 col-12 text-center fw-bold  my-3"
                >
                  Task time
                  <input
                    className="form-control my-2"
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Enter time 2022.05.18"
                  />
                </label>
              </form>
              <button type="submit"
                onClick={() => addTask()}
                className="btn fw-bold btn-primary w-25 mx-auto"
              >
                Add New Task
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
