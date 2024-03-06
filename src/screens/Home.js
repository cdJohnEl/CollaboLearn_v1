import React, { useState, useEffect } from "react";


import Course1 from "../ui/course-1.png";
import { NavLink } from "react-router-dom";

const Homepage = () => {

  useEffect(() => {
    document.title = "Home";
})

  const [popularCourse, setPopularCourse] = React.useState([
    {
      ID: 1,
      title:
        "Learning how to create Beautiful Scenes in Illustrator on 60 minutes",
      tutor: {
        ID: 1,
        name: "Ndu Divine",
        username: "@ndudivine",
        dp: "http://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "82 min",
      poster: Course1,
    },
    {
      ID: 2,
      title:
        "Learning how to create Beautiful Scenes in Illustrator on 60 minutes",
      tutor: {
        ID: 2,
        name: "Ndu Divine",
        username: "@ndudivine",
        dp: "http://placeimg.com/100/100/people?tutor-" + 2,
      },
      duration: "82 min",
      poster: Course1,
    },
  ]);
  //   TOP TUTORS
  const [topTutors, setTopTutors] = React.useState([
    {
      ID: 1,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 1,
    },
    {
      ID: 2,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 2,
    },
    {
      ID: 3,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 3,
    },
    {
      ID: 4,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 4,
    },
    {
      ID: 5,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 5,
    },
    {
      ID: 6,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutors-" + 6,
    },
  ]);
  // Tutors list
  var tutorList = [];
  for (let i = 0; i < 8; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img src={"http://placeimg.com/100/100/people?" + i} className="bl" />
      </button>
    );
  }


  // Course list
  var courseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"popular-course" + i}>
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center",
          }}
        >
          <div className="user abs aic flex">
            <div className="pic">
              <img src={popularCourse[i].tutor.dp} className="bl" />
            </div>
            <div className="meta rel">
              <h2 className="s15 name fontb cfff">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s13 uname fontb cfff">
                @{popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="duration abs">
            <h2 className="s13 fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="s15 fontb cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </NavLink>
    );
  }
  // top tutors list
  var topTutorsList = [];
  for (let i = 0; i < topTutors.length; i++) {
    topTutorsList.push(
      <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
        <div className="user aic flex">
          <div className="pic">
            <img src={topTutors[i].dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="s15 name fontb c333">
              {topTutors[i].name}
            </h2>
            <h2 className="s13 uname fontb c333">
              @{topTutors[i].username}
            </h2>
          </div>
        </div>
      </a>
    );
  }
  return (
    <div className="home-page rel">
      {/* Live Tutors */}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming <span className="fontn">Now</span>
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>
      {/* Popular courses*/}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">This Week</span>
        </h2>
        <div className="courses rel flex">{courseList}</div>
      </div>
      {/* Top Tutors */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Top <span className="fontn">Tutors</span>
        </h2>
        <div className="top-tutors rel flex">{topTutorsList}</div>
      </div>

      
    </div>
  );
};

export default Homepage;
