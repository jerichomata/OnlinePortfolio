import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
// import LandingPage from "./components/App.jsx"


const App = () => {
  useEffect(() => {
    document.title = "Jericho Mata's Porfolio";
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes />
      {/* <LandingPage /> */}
    </>
  );
};

export default App;
