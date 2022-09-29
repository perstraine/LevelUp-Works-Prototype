import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Intro from "../components/home/Intro";
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";
import { useState} from "react";
import SignupLogin from "../components/home/Signup-Login";
import axios from "axios";

export default function Home({ isLoggedIn, setisLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  // localStorage.setItem('userID')
  axios
    .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setisLoggedIn(res.data);
    });

  return (
    <div>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
      />
      <Intro
        setIsModalOpen={setIsModalOpen}
        setIsSignUp={setIsSignUp}
        isLoggedIn={isLoggedIn}
      />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5
        setIsModalOpen={setIsModalOpen}
        setIsSignUp={setIsSignUp}
        isLoggedIn={isLoggedIn}
      />
      <Footer />
      {isModalOpen && (
        <SignupLogin
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          setIsModalOpen={setIsModalOpen}
          setisLoggedIn={setisLoggedIn}
        />
      )}
    </div>
  );
}


