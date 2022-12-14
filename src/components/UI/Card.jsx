import React from "react";


const Card = (props) => {
    const {user:{first_name,last_name,avatar,id, email}}=props
  return (
    <>
      <div className="card">
        <img className="img" width={250} height={250} src={avatar} alt="" />
        <div className="card__body">
          <h2 className="card__title">{first_name} {last_name}</h2>
          <p className="card__text">{email}</p>
          <a href="#link" className="btn card__btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Card;
