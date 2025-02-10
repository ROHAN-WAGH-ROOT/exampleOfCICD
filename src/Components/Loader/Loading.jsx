import React from "react";
import { ClipLoader } from "react-spinners";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loaderClass">
      <ClipLoader />
    </div>
  );
}
