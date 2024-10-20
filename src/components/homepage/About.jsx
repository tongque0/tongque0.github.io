import React from "react";
import clsx from "clsx";

// 内联样式
const styles = {
  avatarContainer: {
    marginLeft: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  avatarContainerSmall: {
    margin: "2rem 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    display: "block",
    width: "48%", // 调整头像大小
    // height: "50%", // 调整头像大小
    borderRadius: "50%", // 确保头像为圆形
  },
};

export const AboutMe = ({ descriptionComponent }) => {
  // 检查窗口大小以应用不同的样式
  const isSmallScreen = window.innerWidth <= 600;

  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className="col col--6">{descriptionComponent}</div>
        <div
          className={clsx("col col--5")}
          style={isSmallScreen ? styles.avatarContainerSmall : styles.avatarContainer}
        >
          <img
            className="avatar"
            style={styles.avatar}
            src="/img/gopher.jpg"
            alt="Avatar" />
        </div>
      </div>
    </div>
  );
};
