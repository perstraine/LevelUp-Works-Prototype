import { ErrorBoundary } from 'react-error-boundary'

import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"
import Home from "../components/project_library/Home"
import ScrollToTop from "../components/shared/ScrollToTop"



function StudentProjectLibrary({ isLoggedIn, setisLoggedIn }) {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      <Home />
      <Footer />
    </ErrorBoundary>
  );
}

export default StudentProjectLibrary;