import React from 'react';
import { Box } from '../components/Box';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export class SignUpScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'name',
      email: 'some@email.com',
      password: 'password'
    };
  }

  submit() {
    axios
      .post(`${BACKEND_URL}/sign-up`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log('winning', res.data);
      })
      .catch((err) => {
        console.log('I failed :(', err);
      });
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <Box>
        <div>
          <label>Your Name</label>
          <input type="text" value={name}  />
        </div>
        <div>
          <label>Your Email</label>
          <input type="email" value={email}  />
        </div>
        <div>
          <label>Your Password</label>
          <input type="password" value={password}  />
        </div>

        <button onClick={() => this.submit()}>
          Submit()
        </button>
      </Box>
    );
  }
} 