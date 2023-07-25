// Complete the Form Component and export it
import { name,email } from "./HomePage";

let handleSubmit=(event)=>{
  event.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form>{/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input value={name}></input>
        <br/><br/>
        <input value={email}></input>
        <br/><br/>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  </>
);

export default Form;