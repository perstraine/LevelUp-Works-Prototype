// import userCircle from "../../assets/images/User_circle.png";
import { useState } from "react";
import styles from "../styles/UserDropdown.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function UserDropdown({
  setisLoggedIn,
  setIsAuthenticated,
}) {
  const navigate = useNavigate();
  const [isDropOpen, setisDropOpen] = useState(false);

  const dropdownClick = (isDropOpen) => {
    setisDropOpen(!isDropOpen);
  };
  return (
    <div id={styles.container}>
      <div id={styles.dropdownButton} onClick={() => dropdownClick(isDropOpen)}>
        <img
          id={styles.userProfilePic}
          src={sessionStorage.getItem("userPic")}
          alt="User pic"
        ></img>
        <div id={ styles.userDetails} style={{ paddingLeft: "5%", marginRight: "20%" }}>
          {sessionStorage.getItem("userName")}
        </div>
      </div>
      {isDropOpen && (
        <div id={styles.dropdownMenuHolder}>
          <div id={styles.dropdownMenu}>
            <div className={styles.dropdownItems} onClick={() => {
              navigate('/profile')
            }}>My Profile</div>
            <div className={styles.dropdownItems}>Settings</div>
            <div
              className={styles.dropdownItems}
              onClick={() => {
                axios
                  .post(
                    "http://localhost:4000/logOut",
                    {},
                    { withCredentials: true }
                  )
                  .then((res) => {
                    console.log(res);
                    sessionStorage.clear();
                    console.log("sessionStorage cleared");
                    setisLoggedIn(false);
                    setIsAuthenticated(false);
                    // setTimeout(() => {
                      navigate("/");
                    // }, 1000);
                  });
              }}
            >
              Log out
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
