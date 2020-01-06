import React from "react";

function PageHeader(props) {

  return (
    <div className="hero">
      <h1>
        The <span>ULTIMATE</span> Dad joke collection
      </h1>
      {props.children}
    </div>
  );
}

export default PageHeader;
