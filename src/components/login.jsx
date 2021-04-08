import { useState } from "react"
export function Login() {
  const [value, setValue] = useState( {
    username: '',
    password: ''
  });
  function handleLogin(e) {
    e.preventDefault();
    console.log( 'value = ', value );
  };
    const handleOnChange = e => {
     console.log('e = ', e);
     setValue( value => ({value, [e.target.name]: e.target.value}))
  };  
    const{submitted, setSubmitted} = useState(false);
    const validatePassword = value => {
        if(value.length === 0) return 'Khong duoc de trong'
        return value.length < 8 ? 'Khong duoc nho hon 8 ky tu' : ''
    };
    const error = {
      password: validatePassword(value, value.password)
    };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="usernameCtrl">Username</label>
          <input
            id="usernameCtrl"
            value={value.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Password</label>
          <input
            id="passwordCtrl"
            value={value.password}
            onChange={handleOnChange}
          />
          {submitted && error.password}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
