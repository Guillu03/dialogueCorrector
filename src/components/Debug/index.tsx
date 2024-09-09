import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Import Components
import Navbar from "../Navbar";

// Import Styles
import "./debug.css";

interface DebugProps {
  msg: string[];
}

const DebugView = ({ msg }: DebugProps) => {
  // Navabar propeties
  const navBarProps = {
    navBrand: {
      name: "En Modo Debug",
    },
    navBtns: [
      {
        name: "exit-btn",
        icon: faXmark,
        path: "/dialog",
      },
    ],
    disableNavButton: false,
  };

  return (
    <>
      <Navbar
        navBrand={navBarProps.navBrand}
        navBtns={navBarProps.navBtns}
        disableNavButton={navBarProps.disableNavButton}
      />
      <div className="debug-container">
        <div className="debug-container-grid">
          <div className="debug-container-grid-item-traza">
            <ul>
              {msg.map(
                (message, index) => message && <li key={index}>{message}</li>
              )}
            </ul>
          </div>
          <div className="debug-container-grid-item-input-btns">
            <div className="debug-container-grid-item-input-field">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    UID
                  </span>
                </div>
                <input
                  type="number"
                  name="uid"
                  placeholder="UID del usuario que ha realizado test usabilidad"
                  pattern="^[0-9]+$"
                  title="Solo se permiten números"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DebugView;
