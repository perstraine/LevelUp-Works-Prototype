import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../components/shared/Fallback'
import { errorHandler } from '../components/shared/ErrorHandler'

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Home from "../components/project-library/Home";
import ScrollToTop from "../components/shared/ScrollToTop";

function ProjectLibrary({ isLoggedIn, setisLoggedIn }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <Home />
      <Footer />
    </ErrorBoundary>
  );
}
export default ProjectLibrary;
