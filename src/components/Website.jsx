import React from "react";

const Website = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="my-website-btn"
    >
      <span>visit website</span>
    </a>
  );
};

export default Website;
