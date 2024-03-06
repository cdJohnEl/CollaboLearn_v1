import React, { useState } from "react";
import {
  FaShield,
  FaBatteryThreeQuarters,
  FaVolumeHigh,
  FaPause,
} from "react-icons/fa6";
import { MdFullscreen } from "react-icons/md";
import Course1 from "../ui/course-1.png";

const Coursepage = (props) => {
  const [course, setCourse] = React.useState({
    ID: 1,
    title:
      "Learning how to create Beautiful Scenes in Illustrator on 60 minutes",
    about: `In this course, you will learn how to create beautiful scenes in illustrator in 60 minutes. This course is for beginners and is taught by Ndu Divine, a seasoned illustrator expert.`,
    tutor: {
      ID: 1,
      name: "Ndu Divine",
      username: "@ndudivine",
      dp: "http://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "82 min",
    poster: Course1,

    videos: [
      {
        ID: 1,
        title: "Introduction to the Course",
        duration: "3:15",
      },
      {
        ID: 2,
        title: "Getting to know the Illustrator Interface",
        duration: "9:55",
      },
      {
        ID: 3,
        title: "Creating your first Scene",
        duration: "62:48",
      },
    ],
  });

  // const courseID = props.match.params.courseid;

  var courseVideos = [];
  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
          <h1 className="s13 dur fontb c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="course-page rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
            <h2 className="s13 uname fontn c777">Course Tutor</h2>
          </div>
        </div>

        <div className="course-meta">
          <h2 className="s24 title fontb c333">{course.title}</h2>
          <p
            className="s18 about fontn c777"
            dangerouslySetInnerHTML={{ __html: course.about }}
          />

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Achievements</span>
            </h2>
            <div className="course-stats aic flex">
              <div className="stats-box flex">
                <FaShield className="icon icon-points s24" />
                <h2 className="val s15 c333 fontb">1800</h2>
                <h2 className="lbl s13 c777">points</h2>
              </div>
              <div className="stats-box flex">
                <FaBatteryThreeQuarters className="icon icon-battery s24" />
                <h2 className="val s15 c333 fontb">45.3%</h2>
                <h2 className="lbl s13 c777">complete</h2>
              </div>
              <div className="stats-box flex">
                <FaBatteryThreeQuarters className="icon icon-battery s24" />
                <h2 className="val s15 c333 fontb">+26</h2>
                <h2 className="lbl s13 c777">level</h2>
              </div>
            </div>
          </div>

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Details</span>
            </h2>
            <div className="course-videos flex">{courseVideos}</div>
          </div>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video poster={course.poster} />
          <div className="ctrls abs aic flex">
            <FaPause className="icon icon-battery s24 pp-btn" />
            <div className="timer rel fontn s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <FaVolumeHigh className="icon icon-battery s24 vol" />
            <MdFullscreen className="icon icon-battery s24 fs" />
          </div>
        </div>

        <div className="extras-block rel flex">
          <div className="chat rel">
            <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Quick <span className="fontn">Chat</span>
              </h2>
              <div className="messages aic flex">
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>
                </div>
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">
                    Love this course...
                  </h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Hey</h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">
                    Dope Intro, thanks!@
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="now-watching rel">
            <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
            <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Now <span className="fontn">Watching</span>
              </h2>
              <div className="you-list rel">
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-1"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Grey Montgommery</h2>
                    <h2 className="s13 uname fontn c777">@gregdomm</h2>
                  </div>
                </div>
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-2"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                    <h2 className="s13 uname fontn c777">@leilaearns</h2>
                  </div>
                </div>
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-3"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                    <h2 className="s13 uname fontn c777">@leilaearns</h2>
                  </div>
                </div>
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="http://placeimg.com/100/100/people?guest-4"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Leila Jefferson</h2>
                    <h2 className="s13 uname fontn c777">@leilaearns</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursepage;
