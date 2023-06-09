import React from "react";
import "./GitHubButton.css";
const GitHubButton = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="github-btn"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        height="16"
        width="16"
        className="github-icon"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 .4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.9 11.9c-.1 0-.1 0-.2-.1-.6-.3-1 .2-1 .7 0 .4.1.7.4 1 .2.2.2.2.1.4-.2.2-.4.2-.6.1-.8-.4-1.2-.6-2.4-.6-1.3 0-2.3.3-3 .9-.9.7-1.3 1.7-1.3 2.8 0 .2 0 .5.2.6.1.1.2.1.3.1.1 0 .2-.1.3-.2.2-.2.5-.2.8-.2.5-.1.8-.1 1.1-.1.5-.1.9-.3 1.3-.5.5-.3.9-.6 1.5-.6 1.3-.1 2.3.7 2.3 1.9 0 1-.6 1.8-1.4 2.2.2.2.4.2.7.2.4 0 .8-.1 1.1-.4.2-.2.4-.4.6-.7.1-.2.2-.4.1-.6-.2-.2-.4-.2-.6-.2z"
        ></path>
      </svg>
      <span>GitHub</span>
    </a>
  );
};

export default GitHubButton;
