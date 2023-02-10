import React from "react";
import pdf from "../assets/orwell_subscriptin.pdf";

const Pdf = () => {
  return (
    <div>
      <embed
        src={pdf}
        type=""
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          overflowY: "scroll",
          zIndex: "1000000000000",
        }}
      />
    </div>
  );
};

export default Pdf;
