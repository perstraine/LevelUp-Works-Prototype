import MarkDone from "../components/HelpRequests/MarkDone";
import StudentRequest from "../components/HelpRequests/StudentRequest";
import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import SecondaryFooter from "../components/shared/SecondaryFooter";
import TeacherSidebar from "../components/shared/TeacherSidebar";

export default function HelpRequests({ isLoggedIn, setisLoggedIn }) {
  // components used to build user interface
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <TeacherSidebar />
      <ContentScrollCard>
        <MarkDone />
        <StudentRequest />
      </ContentScrollCard>
      <SecondaryFooter />
    </div>
  );
}
