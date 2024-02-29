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
} from "react-icons/fa6";

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
        <a
          href={nav[i].slug}
          className={
            "link bl noul flex c333" + (currentPage === nav[i].slug ? "on" : "")
          }
        >
          {React.cloneElement(nav[i].icon, { className: "s20" })}
          {/* <FaHouse className={"s20 " + nav[i].icon} /> */}
          <span className="lbl s20">{nav[i].label}</span>
        </a>
      </li>
    );
  }

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
        <div className="s24 cfff photo">
          <img src="https://placehold.co/100x100/png" className="bl" />
        </div>
        <div className="lbl s15 fontb c333">
          John Chimdike
          <h2 className="uname s13 c777">@johnchimdike</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
