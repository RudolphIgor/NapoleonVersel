import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

const Index = ({ text }) => {
  return <div className={clsx(styles.lable)}>{text}</div>;
};

export default Index;
