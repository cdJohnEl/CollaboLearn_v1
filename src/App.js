// import logo from './logo.svg';
import "./css/App.css";
import "./css/props.css";

// Screens
import Header from "./screens/header";
import Sidebar from "./screens/Sidebar";
import Homepage from "./screens/Home";
import Rightbar from "./screens/rightbar";
import Coursepage from "./screens/Course";

function App() {
  <Rightbar />
  return (
    <div className="App flex">
      {/* <Header /> */}
      <Sidebar />
      <div className="app-content">
        <Coursepage />
      </div>
      
    </div>
  );
}

export default App;
