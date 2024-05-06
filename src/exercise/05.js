// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from "react";
import "../box-styles.css";

/* EXERCISE */

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
//   >
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{ backgroundColor: "pink", fontStyle: "italic" }}
//   >
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{ backgroundColor: "orange", fontStyle: "italic" }}
//   >
//     large orange box
//   </div>
// );

/* EXTRA CREDIT 1 */

// const smallBox = (
//   <Box
//     className="box--small"
//     style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
//   >
//     small lightblue box
//   </Box>
// );
// const mediumBox = (
//   <Box
//     className="box--medium"
//     style={{ backgroundColor: "pink", fontStyle: "italic" }}
//   >
//     medium pink box
//   </Box>
// );
// const largeBox = (
//   <Box
//     className="box--large"
//     style={{ backgroundColor: "orange", fontStyle: "italic" }}
//   >
//     large orange box
//   </Box>
// );

// function Box({ className, style, ...otherProps }) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{ fontStyle: "italic", ...style }}
//       {...otherProps}
//     ></div>
//   );
// }

/* EXTRA CREDIT 2 */

const smallBox = (
  <Box
    size="small"
    style={{ backgroundColor: "lightblue", fontStyle: "italic" }}
  >
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size="medium" style={{ backgroundColor: "pink", fontStyle: "italic" }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size="large" style={{ backgroundColor: "orange", fontStyle: "italic" }}>
    large orange box
  </Box>
);

function Box({ size, className, style, ...otherProps }) {
  return (
    <div
      className={`box box--${size}`}
      style={{ fontStyle: "italic", ...style }}
      {...otherProps}
    ></div>
  );
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default App;
