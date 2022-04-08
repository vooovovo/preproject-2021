import React from "react";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Generalmain from "./General/generalmain";
import Nisitmain from "./Nisit/nisitmain";
import Adminmenu from "./Admin/adminmenu";
import Adminmain from "./Admin/adminmain";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Adminmain/>}/>
      </Routes>
    </Router>
  );
}

export default App;