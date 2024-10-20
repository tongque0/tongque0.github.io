import React from "react";
import clsx from "clsx";

// 内联样式
const styles = {
  avatarContainer: {
    marginLeft: "2rem",
  },
  avatarContainerSmall: {
    margin: "2rem 0 0",
  },
  avatarImg: {
    display: "block",
    maxWidth: "288px",
    maxHeight: "288px",
    margin: "0 auto",
    borderRadius: "999px",
  },
};

export const AboutMe = ({  descriptionComponent }) => {
    return (
      <div className="margin-top--lg">
        <h2>About me</h2>
        <div className="row">
          <div className="col col--6">{descriptionComponent}</div>
          <div className={clsx("col col--5", styles.avatarContainer)}>
            <img
              src="/img/gopher.jpg"
              alt="avatar"
              style={styles.avatarImg}
              className="avatar"
            />
          </div>
        </div>
      </div>
    );
  };
