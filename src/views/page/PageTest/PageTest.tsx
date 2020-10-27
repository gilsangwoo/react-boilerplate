import React from "react";
import className from "classnames/bind";
import styles from "./PageTest.scss";

const cx = className.bind(styles);
const PageTest = () => {
    return (
      <h1 className={cx("title")}>PageTest</h1>
  )
};
export default PageTest;