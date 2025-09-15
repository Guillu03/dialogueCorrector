/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with the elements of the different buttons                                             *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { ReactNode } from "react";
import useButtonViewController from "./useButtonViewController";
import "./button.css";

/**
 * Button properties
 */
interface ButtonProps {
  id: string;
  classStyle?: string;
  children: ReactNode;
  path: string;
  type: "button" | "submit";
  onClick?: any;
}

/**
 * View with button elements
 *
 * @param ButtonProps
 * @returns ButtonView
 */
const ButtonView: React.FC<ButtonProps> = ({
  id,
  classStyle,
  children,
  path,
  type,
  onClick,
}: ButtonProps) => {
  /* Controller of this View  */
  const { onClickNavigateToPath } = useButtonViewController();

  return (
    <>
      {type === "button" && onClick ? ( // Custom onClick function
        <button
          id={id}
          type="button"
          className={"btn btn-active-color " + classStyle}
          onClick={onClick}
        >
          {children}
        </button>
      ) : type === "button" && !onClick ? ( // Default onClick function
        <button
          id={id}
          type="button"
          className={"btn btn-active-color " + classStyle}
          onClick={() => onClickNavigateToPath(path)}
        >
          {children}
        </button>
      ) : (
        // Button used in submit type forms
        <button
          id={id}
          type={type}
          className={"btn btn-active-color " + classStyle}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonView;
