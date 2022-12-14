import React, { useState, useEffect } from "react";
import "./style.scss";
import { context } from "../../context/context";
import { useContext } from "react";

const index = () => {
  const { lang, langs, setLangs } = useContext(context);

  const t = lang[langs];

  const [num, setNum] = useState(0);
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        setLoad(true);
      })
      .catch((err) => console.log(err));
    console.log("render");
    return () => {
      console.log("willUnmount");
    };
  }, [num]);

  if (!load) {
    return (
      <>
        <div class="loadingio-spinner-ripple-ud9cmsndche load my-5">
          <div class="ldio-6n6ho8yvau5">
            <div></div>
            <div></div>
          </div>
        </div>
        .
      </>
    );
  }
  return (
    <div className="container">
      <div className="row p-5">
        <div className="card p-5">
          <h1 className="text-center">{num}</h1>
          <button className="btn btn-danger" onClick={() => setNum(num + 1)}>
            plus
          </button>

          <h2 className="text-center my-5">{t.list} </h2>
          <div className="d-flex flex-column align-items-center box g-3">
            {user.length > 0
              ? user.map((e) => {
                  return (
                    <div className="d-flex g-2">
                      <h2 className="fw-bold text-black ">
                        <img src={e.avatar} alt={e.email} />
                        <p className="list-item-group fw-bold fs-1">
                          {e.first_name}
                        </p>
                      </h2>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aperiam praesentium corporis libero magnam ratione
                    </div>
                  );
                })
              : { load }}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
