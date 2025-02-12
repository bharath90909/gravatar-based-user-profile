import React from "react";
import "../ui/css/Loader.css";

function Loader() {
  return (
    <div className="profile-card skeleton">
      <div className="skeleton__avatar" />
      <div className="skeleton__name" />
      <div className="skeleton__meta" />
      <div className="skeleton__meta" />
      <div className="skeleton__description" />
    </div>
  );
}

export default Loader;
