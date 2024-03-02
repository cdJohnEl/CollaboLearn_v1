import React from "react";

import Course1 from "../ui/course-1.png";
import Cake from "../ui/cake.png";

const Rightbar = () => {
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
    {
      ID: 3,
      title:
        "Learning how to create Beautiful Scenes in Illustrator on 60 minutes",
      tutor: {
        ID: 2,
        name: "Ndu Divine",
        username: "@ndudivine",
        dp: "http://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "82 min",
      poster: Course1,
    },
  ]);

  // Course list
  var courseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#" className="course rel" key={"popular-course" + i}>
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
      </a>
    );
  }
  return (
    <div className="rightbar rel">
      <div className="section rel">
        <h2 className="title s24 fontb">
          Advanced <span className="fontn">Search</span>
        </h2>
        <div className="search-box rel flex">
          <input
            type="text"
            placeholder="Search something"
            className="query s15 fontb"
          />
          <button className="go s15 fontb">Find</button>
        </div>
      </div>

      <div className="section section-b rel">
        <div className="courses rel flex">
          <div className="course-a">{courseList[0]}</div>
          <div className="flex cols">
            {courseList[1]}
            {courseList[2]}
          </div>
        </div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Special <span className="fontn">Offers</span>
        </h2>
        <div className="special-offer rel flex">
          <div className="meta rel">
            <h2 className="h1 s20 fontb">50 Days Premium!</h2>
            <h2 className="h2 s14 fontb">Get it before 5.5.2020</h2>
            <button className="s15 fontb">Learn more</button>
          </div>
          <div className="vector rel">
            <img src={Cake} />
          </div>
          <div className="ring abs" />
        </div>
      </div>

      
    </div>
  );
};

export default Rightbar;
