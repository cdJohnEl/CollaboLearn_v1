import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";
import "./css/App.css";
import "./css/props.css";

// Screens
import Header from "./screens/header";
import Sidebar from "./screens/Sidebar";
import Homepage from "./screens/Home";
import Coursepage from "./screens/Course";
import ExplorePage from "./screens/Discover";
import CategoriesPage from "./screens/Categories";
import MyCoursesPage from "./screens/mycourses";
import Rightbar from "./screens/rightbar";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import AccountPage from "./screens/oauth";


import * as fire_base from "firebase/app";

global.firebase = fire_base;
global.fire = {
    ID: null
};
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App flex">
                        <Router>
                          <Sidebar />
                          <div className="app-content">
                            <Routes> 
                              <Route exact path="/" element={<Homepage />} />
                              <Route path="/course/:courseid" element={<Coursepage />} />
                              <Route path="/explore" element={<ExplorePage />} />
                              <Route path="/cates" element={<CategoriesPage />} />
                              <Route path="/my-courses" element={<MyCoursesPage />} />
                              <Route path="/oauth" element={<AccountPage />} />
                            </Routes>
                          </div>
                        </Router>
                        
                      </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}
