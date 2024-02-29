// import logo from './logo.svg';
import "./css/App.css";
import "./css/props.css";

// Screens
import Header from "./screens/header";
import Sidebar from "./screens/Sidebar";
import Homepage from "./screens/Home";
import Rightbar from "./screens/rightbar";

function App() {
  return (
    <div className="App flex">
      {/* <Header /> */}
      <Sidebar />
      <div className="app-content">
        <Homepage />
      </div>
      <Rightbar />
    </div>
  );
}

export default App;
