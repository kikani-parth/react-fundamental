// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  /* EXERCISE */

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const username = event.target.elements.usernameInput.value;
  //   onSubmitUsername(username);
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input type="text" id="usernameInput" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  /*   EXTRA CREDIT 1 */
  // const usernameInputRef = React.useRef();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const username = usernameInputRef.current.value;
  //   onSubmitUsername(username);
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input ref={usernameInputRef} type="text" id="usernameInput" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  /* EXTRA CREDIT 2 */
  // const usernameInputRef = React.useRef();
  // const [error, setError] = React.useState(null);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const username = usernameInputRef.current.value;
  //   onSubmitUsername(username);
  // }

  // function handleChange(event) {
  //   const input = event.target.value;
  //   const isValid = input === input.toLowerCase(); // Check if the input is in lower case

  //   // If valid, set error as NULL; else, set the error msg
  //   setError(isValid ? null : "Username should be lower case");
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input type="text" id="usernameInput" onChange={handleChange} />
  //       <div role="alert">{error}</div>
  //     </div>
  //     <button disabled={Boolean(error)} type="submit">
  //       Submit
  //     </button>
  //   </form>
  // );

  /* EXTRA CREDIT 3 */
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const input = event.target.value;
    setUsername(input.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          type="text"
          id="usernameInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
