/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Main view with the application's features                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/

// Import React elements
import React from "react";

// Import FontAwesome Icons
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Components
import Navbar from "../Navbar";
import Footer from "../Footer";
import Dialog from "../Dialog";

/**
 * Main View
 *
 * @returns MainView
 */
const MainView: React.FC = () => {
  /* Navbar properties */
  const navBarProps = {
    navBrand: {
      name: "Alertas ambientales",
    },
    navBtns: [
      // {
      //   name: "back-btn",
      //   icon: faArrowLeft,
      //   path: "/startMenu",
      // },
      // {
      //   name: "debug-btn",
      //   icon: faCode,
      //   path: "/debug",
      // },
    ],
    disableNavButton: false,
  };

  /* Footer properties */
  const footerProps = {
    icon: <FontAwesomeIcon icon={faBullhorn} size="lg" />,
    msg: "Alertas ambientales",
  };

  return (
    <>
      <Navbar
        navBrand={navBarProps.navBrand}
        navBtns={navBarProps.navBtns}
        disableNavButton={navBarProps.disableNavButton}
      />
      <Dialog />
      <Footer msg={footerProps.msg} icon={footerProps.icon} />
    </>
  );
};

export default MainView;
