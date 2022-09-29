import SpreadsheetExport from "../components/ProgressTracker/SpreadsheetExport";
import StudentProgress from "../components/ProgressTracker/StudentProgress";
import ContentScrollCard from "../components/shared/ContentScrollCard";
import Navbar from "../components/shared/Navbar";
import TeacherSidebar from "../components/shared/TeacherSidebar";
import SecondaryFooter from "../components/shared/SecondaryFooter";

export default function ProgressTracker({ isLoggedIn, setisLoggedIn }) {
  // components used to build user interface
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <TeacherSidebar />
      <ContentScrollCard>
        <SpreadsheetExport />
        <StudentProgress />
      </ContentScrollCard>
      <SecondaryFooter />
    </div>
  );
}
