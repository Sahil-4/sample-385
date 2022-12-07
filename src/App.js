import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Components/Header/Header";
import Profilescontainer from "./Components/Profilescontainer/Profilescontainer";
import Searchbar from "./Components/Searchbar/Searchbar";
import Slotdetails from "./Components/Slotdetails/Slotdetails";
import { getData } from "./redux/slices/data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    return () => {};
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      <Searchbar />
      <Profilescontainer />
      <Slotdetails />
    </div>
  );
}

export default App;
