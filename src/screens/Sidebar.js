import React, { useState } from "react";
import logo from "../ui/logo-coral.svg";
import {
  FaHouse,
  FaRocket,
  FaTag,
  FaBriefcase,
  FaLightbulb,
  FaShield,
  FaBatteryThreeQuarters,
  FaUser,
} from "react-icons/fa6";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [nav, setNav] = React.useState([
    { icon: <FaHouse />, label: "Home", slug: "/" },
    { icon: <FaRocket />, label: "Explore", slug: "explore" },
    { icon: <FaTag />, label: "Categories", slug: "cates" },
    { icon: <FaBriefcase />, label: "My Courses", slug: "my-courses" },
  ]);

  const [currentPage, setCurrentPage] = React.useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <NavLink
          to={nav[i].slug}
          className={
            "link bl noul flex c333"
          }
        >
          {React.cloneElement(nav[i].icon, { className: "s20 " })}
          {/* <FaHouse className={"s20 " + nav[i].icon} /> */}
          <span className="lbl s20">{nav[i].label}</span>
        </NavLink>
      </li>
    );
  }

  console.log(global.fire);

  return (
    <div className="sidebar rel">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>

      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <FaLightbulb className="s24 cfff icon" />
        <div className="lbl s15 fontb c333">
          Updated Courses
          <h2 className="author s13 c777">by John Chimdike</h2>
        </div>
      </div>
      <div className="stats aic flex">
        <div className="stats-box  flex">
          <FaShield className="icon icon-points s24" />
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>

        <div className="stats-box flex">
          <FaBatteryThreeQuarters className="icon icon-battery s24" />
          <h2 className="val s15 c333 fontb">45.3%</h2>
          <h2 className="lbl s13 c777">complete</h2>
        </div>
      </div>

      <div className="me flex aic">
                {global.fire.ID ? <React.Fragment><div className="photo cfff s24">
                    <img src="http://placeimg.com/100/100/people" className="bl" />
                </div>
                <div className="lbl s15 fontb c333">
                    Chimdike John  
                    <h2 className="uname s13 c777">@chimdikejohn</h2>                 
                </div>
                </React.Fragment>
                : 
                <NavLink to={"oauth"} className={"aic link noul flex c333"}>
                    <FaUser className="icon s20" />
                    <h2 className="lbl s20 fontb">Sign in</h2>
                </NavLink>
                }
            </div>
    </div>
  );
};

export default Sidebar;
