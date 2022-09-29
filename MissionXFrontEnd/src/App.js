import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLibrary from "./pages/ProjectLibrary";
import StudentProfiles from "./pages/StudentProfiles";
import ProgressTracker from "./pages/ProgressTracker";
import HelpRequests from "./pages/HelpRequests";
import ProjectSubmissions from "./pages/ProjectSubmissions";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import PrivateRouteStudent from "./pages/PrivateRouteStudent";
import PrivateRouteTeacher from "./pages/PrivateRouteTeacher";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}>
            <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>}/>
          </Route>
          <Route element={ <PrivateRouteStudent isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} >
            <Route path="/student" element={ <ProjectLibrary isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
          </Route>
          <Route element={ <PrivateRouteTeacher isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} /> }>
            <Route path="/teacher" element={ <ProjectLibrary isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/progress-tracker" element={ <ProgressTracker isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}/>
            <Route path="/student-profiles" element={ <StudentProfiles isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} /> }/>
            <Route path="/help-requests" element={<HelpRequests isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
            <Route path="/project-submissions" element={<ProjectSubmissions isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
