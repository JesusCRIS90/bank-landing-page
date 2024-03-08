import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import OperationsPage from "./pages/OperationsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import SignUpPage from "./pages/SignUpPage";

import ModalWindow from "./layouts/ModalWindow";

import { AppInfo } from "./utils/Config";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function ShowModalWindow() {
    setShowModal(true);
  }
  function HideModalWindow() {
    setShowModal(false);
  }

  const ModalWindowInfo = {
    Callbacks: {
      Show: ShowModalWindow,
      Hide: HideModalWindow,
    },
    RenderFunctionTagId: "openAccount",
    Data: AppInfo.OpenAccountModalWindow,
  };

  AppInfo.Header.NavItems[3].handleClick = ShowModalWindow;
  AppInfo.SignUp.Button.onClickHandle = ShowModalWindow;

  return (
    <>
      <Header headerInfo={AppInfo.Header} />
      <HomePage homeInfo={AppInfo.Home} />
      <FeaturesPage FeaturesInfo={AppInfo.Features} />
      <OperationsPage OperationsInfo={AppInfo.Operations} />
      <TestimonialsPage TestimonialsInfo={AppInfo.Testimonials} />
      <SignUpPage SignUpInfo={AppInfo.SignUp} />
      <Footer footerInfo={AppInfo.Footer} />
      {showModal && (
        <ModalWindow ModalInfo={ModalWindowInfo} id={"modal-open-account"} />
      )}
    </>
  );
}

export default App;
