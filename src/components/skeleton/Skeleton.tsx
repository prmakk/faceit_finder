import { FC } from "react";

import styles from "./index.module.scss";

interface IProps {
    width: string;
    ratio: string;
    borderRadius: string;
}

const Skeleton: FC<IProps> = ({ width, ratio, borderRadius }) => {
    return (
        <div
            className={styles.skeleton}
            style={{
                width: `${width}px`,
                aspectRatio: ratio,
                borderRadius: `${borderRadius}px`,
            }}
        ></div>
    );
};

export default Skeleton;
