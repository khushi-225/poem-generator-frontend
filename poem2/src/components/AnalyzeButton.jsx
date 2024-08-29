// import React from "react";
// import styles from "./AnalyzeButton.module.css";

// function AnalyzeButton({ analyzePoem }) {
//   return (
//     <div className={styles.analyzeButtonContainer}>
//       <button className={styles.analyzeButton} onClick={analyzePoem}>
//         Analyze Poem
//       </button>
//     </div>
//   );
// }

// export default AnalyzeButton;

import React, { useState } from "react";
import styles from "./AnalyzeButton.module.css";

function AnalyzeButton({ onClick }) {
  const [buttonState, setButtonState] = useState("initial"); // "initial", "analyzing", "done"

  const handleClick = () => {
    setButtonState("analyzing");
    onClick().then(() => {
      setButtonState("done");
    });
  };

  let buttonText;
  switch (buttonState) {
    case "analyzing":
      buttonText = "Analyzing...";
      break;
    case "done":
      buttonText = "Analysis Done";
      break;
    default:
      buttonText = "Analyze Poem";
  }

  return (
    <button
      className={`${styles.analyzeButton} ${buttonState !== "initial" ? styles.analyzing : ""}`}
      onClick={handleClick}
      disabled={buttonState === "analyzing"} // Disable button while analyzing
    >
      {buttonText}
    </button>
  );
}

export default AnalyzeButton;

