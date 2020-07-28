import React, { useState } from "react";

const Login = () => {

    const [login, setLogin] = useState({
      email: '',
      password: ''
    })
  
    const handleChange = event => {
      setLogin({ ...login, [event.target.name]: event.target.value })
    }
  
  
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   axiosWithAuth()
    //     .post('https://better-professor-back-end.herokuapp.com/users/login', login)
    //     .then(response => {
    //       console.log('response from post', response.data);
    //       localStorage.setItem('token', response.data.token)
    //       localStorage.setItem('id', response.data.id)
    //       setLogin({ ...login, isLoggedIn: true })
    //       props.history.push('/');
    //     })
  
    // }
  
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={login.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
            />
            <div>
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;
  