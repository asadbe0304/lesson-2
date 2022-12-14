import img from "./../../assets/react.svg";
import "./style.scss";
import { NavLink } from "react-router-dom";
import {useContext} from "react"
import {context} from "../../context/context";
// import { useState } from "react";


const Navbar = () => {
const {lang, langs, setLangs}= useContext(context)


const t= lang[langs]

  return (
    <>
      <header >
        <div className="container">
          <div className="header d-flex align-items-center">
            <a href="#link" className="header__link">
              <img src={img} alt="images" />
              React
            </a>
            <select className="form-select w-25"  onChange={(e)=>{
              setLangs(e.target.value)
              localStorage.setItem('lang', e.target.value)
              }}
              value = {localStorage.getItem("lang")}
              >
              <option value="eng">Eng</option>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
            </select>
            <nav className="nav d-flex  aling-items-center">
              <ul className="nav__list m-0">
                <li className="nav__list--item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "list__item--link text-warning"
                        : "list__item--link"
                    }
                  >
                    {t.home}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink
                    to="/task"
                    className={({ isActive }) =>
                      isActive
                        ? "list__item--link text-warning"
                        : "list__item--link"
                    }
                  >
                    {t.todo}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink
                    to="/adduser"
                    className={({ isActive }) =>
                      isActive
                        ? "list__item--link text-warning"
                        : "list__item--link"
                    }
                  >
                    {t.link}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink
                    to="/userlist"
                    className={({ isActive }) =>
                      isActive
                        ? "list__item--link text-warning"
                        : "list__item--link"
                    }
                  >
                  {t.link}
                  </NavLink>
                </li>
              </ul>
              <button className="btn btn-danger mx-3" >Dark</button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
