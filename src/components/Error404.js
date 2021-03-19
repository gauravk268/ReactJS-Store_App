import React from "react";

const Error404 = (props) => {
  return (
    <div className="error-404-section container-fluid">
      <h1 className="style-error-mark" style={styleErrorMark}>
        &#33;
      </h1>
      <h1>Error: 404</h1>
      <h1>Page not found</h1>
      <button className="btn btn-primary">
        <a href="/">
          <h3>Return to Homepage</h3>
        </a>
      </button>
    </div>
  );
};

const styleErrorMark = {
  fontSize: "8rem",
  color: "red",
  border: "10px solid red",
  margin: "3rem auto",
  borderRadius: "50%",
  width: "11rem",
  height: "11rem",
};

export default Error404;
