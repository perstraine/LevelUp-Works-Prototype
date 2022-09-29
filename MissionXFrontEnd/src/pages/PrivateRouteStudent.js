import { Outlet } from "react-router";
import axios from "axios";
import NeedLogIn from "../components/shared/NeedLogIn";

export default function PrivateRouteStudent({ isLoggedIn, setisLoggedIn }) {
  // const [type, setType] = useState('')
  const type = sessionStorage.getItem('userType' )

    axios
      .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setisLoggedIn(res.data);
      });
  if (!isLoggedIn | type !== 'student') {
    return <NeedLogIn userType="STUDENT"/>;
  } else {
    return <Outlet />;
      }
  }
