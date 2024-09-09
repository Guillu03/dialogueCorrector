/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with footer elements                                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import "./footer.css";
import React, { ReactNode } from "react";
import { useSanitizedData } from "../../shared/utils/useSanitizedData";

/**
 * Footer properties
 */
interface FooterProps {
  msg: string;
  icon: ReactNode;
}

/**
 * View with the footer
 *
 * @param FooterProps
 * @returns FooterView
 */
const FooterView: React.FC<FooterProps> = ({ msg, icon }: FooterProps) => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-custom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-1 icon">
                <div>{icon}</div>
              </div>
              <div className="col-11 text">
                <div dangerouslySetInnerHTML={useSanitizedData(msg)}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterView;
