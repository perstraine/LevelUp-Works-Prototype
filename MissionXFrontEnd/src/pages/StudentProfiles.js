import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import SecondaryFooter from "../components/shared/SecondaryFooter";
import TeacherSidebar from "../components/shared/TeacherSidebar";
import StudentCard from "../components/StudentProfiles/StudentCard";

export default function StudentProfiles({ isLoggedIn, setisLoggedIn }) {
  // components used to build user interface
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <TeacherSidebar />
      <ContentScrollCard>
        <StudentCard />
      </ContentScrollCard>
      <SecondaryFooter />
    </div>
  );
}
