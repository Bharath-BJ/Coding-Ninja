import "./styles.css";
/**
 * Inline to Internal
Send Feedback
You have created a simple SignUp form using React and styled it using inline styles. But as the number of similar components grows you realize that the code used for styling is getting repetitive and hence it takes work to maintain.


Try to reuse/refactor the styles without changing the output.
Expected Output: Downloaded as output
 */
export default function App() {
  return (
    <div className="App">
      <form
        style={signUp.form}
      >
        <h3 style={signUp.title}>Sign Up</h3>
        <input style={signUp.input} placeholder="Username" />
        <input style={signUp.input} placeholder="Email" />
        <input style={signUp.input} placeholder="Password" />
        <div
          style={signUp.buttonContainer}
        >
          <button
            style={signUp.cancelButton}
          >
            Cancel
          </button>
          <button
            style={signUp.loginButton}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const signUp={
  form:{
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  title:{ 
    fontSize: "2rem",
    letterSpacing: 2 
  },
  input:{ 
    padding: 10 
  },
  buttonContainer:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  cancelButton:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },
  loginButton:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }  
  
}