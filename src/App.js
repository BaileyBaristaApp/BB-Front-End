import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewChallenge from "./components/challenges/view-challenges";
import ClassesRegister from "./components/classes/classes-register";
import BaristaSignUp from "./components/classes/baristas-signup";
import SkillRegister from "./components/skills/register-skills";
import Register from "./components/Users/useres-register";
import UsersDashboard from "./components/Users/users-dashboard";
import UsersLogin from "./components/Users/users-login";
import ViewUsers from "./components/Users/view-users";
import MainNavBar from "./components/Welcome/mainNavBar";
import Welcome from "./components/Welcome/mainPage";
import ClassesDashboard from "./components/classes/classes-dashBoard";
import ViewClasses from "./components/classes/view-classes";
import ChallengeDashboard from "./components/challenges/challenge-dashboard";
import CoursesDashboard from "./components/courses/coursesdashboard";
import ViewCourses from "./components/courses/view-courses";
import DropClasses from "./components/classes/drop-add-classes";
import DropChallenge from "./components/challenges/drop-challenge";
import SignUpChallenge from "./components/challenges/sign-up";
import CourseRegister from "./components/courses/register-courses";




export const userContext = createContext();

function App() {
  const [user, setUser] = useState({username: "bailey" })
  return (
    <>
    <BrowserRouter>
    <userContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/usersdashboard" element={<UsersDashboard/>} />
          <Route path="/mainnavbar" element={<MainNavBar/>}/>
          <Route path="/login" element={<UsersLogin/>}/>
          <Route path ="/users" element = {<Register/>}/>
          <Route path="/usersView" element={<ViewUsers />} />
          <Route path="/classesdashboard" element={<ClassesDashboard />} />
          <Route path="/challengedashboard" element={<ChallengeDashboard />} />
          <Route path ="/classes" element = {<ClassesRegister/>}/>
          <Route path ="/baristasignup" element = {<BaristaSignUp/>}/>
          <Route path ="/skills" element = {<SkillRegister/>}/>
          <Route path="/challenges" element={<ViewChallenge />} />
          <Route path="/courses" element={<ViewCourses />} />
          <Route path="/addcourses" element={<CourseRegister />} />
          <Route path="/classesview" element={<ViewClasses />} />
          <Route path="/dropclasses" element={<DropClasses />} />
          <Route path="/dropchallenges" element={<DropChallenge />} />
          <Route path="/coursesdashboard" element={<CoursesDashboard />} />
          <Route path="/registerchallenge" element={<SignUpChallenge />} />
        
            
        </Routes>
    </userContext.Provider>
    </BrowserRouter>
    </>
  )
     
}

export default App;
