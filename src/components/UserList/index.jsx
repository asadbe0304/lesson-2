import React from "react";
import "./style.scss";
import { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
// import baseUrl from "./../../db/db.json"
import { useEffect } from "react";


const index = () => {

  const baseUrl = "http://localhost:3000"

const [us, setUs] = useState([])

    const fetchUser = async ()=>{
        const user = await fetch(`${baseUrl}/userlist`).then((res)=> res.json()).then((res)=> setUs(res));
        // const userlist= await user.json();
        // console.log(userlist);
    }

useEffect(()=>{
    fetchUser();
    console.log();
}, [])

    return (
        <div className="col-10 mx-auto my-4">
                <table className="table table-striped table-dark table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Task Title</th>
                  <th>Task Time</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                        <tr >
                          <td scope="row"></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
        
              </tbody>
            </table>
        </div>    )            
};

export default index;