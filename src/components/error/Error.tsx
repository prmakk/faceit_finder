import { FC } from "react";
import styles from "./index.module.scss";

interface IError {
    children: string;
}

const Error: FC<IError> = ({ children }) => {
    return (
        <div className={styles.error}>
            <svg
                fill="#ff0033"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>error-standard-solid</title>{" "}
                    <path
                        className="clr-i-solid clr-i-solid-path-1"
                        d="M18,2.1a16,16,0,1,0,16,16A16,16,0,0,0,18,2.1ZM16.6,8.8a1.4,1.4,0,0,1,2.8,0v12a1.4,1.4,0,0,1-2.8,0ZM18,28.6a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,18,28.6Z"
                    ></path>{" "}
                    <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        fillOpacity="0"
                    ></rect>{" "}
                </g>
            </svg>
            {children} :(
        </div>
    );
};

export default Error;
