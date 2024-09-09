/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with navbar elements                                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import "./navbar.css";
import Button from "../../shared/components/Button/index";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Navbar button properties
 */
export interface NavBtn {
  name: string;
  icon: IconDefinition;
  path: string;
}

/**
 * Navbar brand properties
 */
export interface NavBrand {
  name?: string;
  icon?: ReactNode;
  alt?: string;
}

/**
 * Navbar properties
 */
interface NavbarProps {
  navBrand: NavBrand;
  navBtns: NavBtn[];
  disableNavButton: boolean;
}

/**
 * View with the navbar
 *
 * @param NavbarProps
 * @returns NavbarView
 */
const NavbarView: React.FC<NavbarProps> = ({
  navBrand,
  navBtns,
}: NavbarProps) => {
  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-custom navbar-expand-sm">
          <div className="container-fluid">
            <div className="navbar-brand">
              <div className="navbar-brand-grid-container">
                {!navBrand.name ? (
                  <>
                    <div className="onlyIconGrid">
                      <div className="icon">{navBrand.icon}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="nameGrid align-items-center">
                      <div className="name">{navBrand.name}</div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                {navBtns.map((navBtn, index) => (
                  <div className="nav-btn-item" key={index}>
                    <Button id={navBtn.name} path={navBtn.path} type="button">
                      <FontAwesomeIcon
                        className="nav-btn-icon"
                        icon={navBtn.icon}
                      />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarView;
