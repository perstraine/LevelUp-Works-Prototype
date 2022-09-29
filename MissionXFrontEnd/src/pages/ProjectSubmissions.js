import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import TeacherSidebar from "../components/shared/TeacherSidebar";

export default function ProjectSubmissions({ isLoggedIn, setisLoggedIn }) {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <TeacherSidebar />
      <ContentScrollCard></ContentScrollCard>
    </div>
  );
}
