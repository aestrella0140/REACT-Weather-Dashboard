import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState},
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div className='login'>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                 type="email"
                 placeholder='Enter email here'
                 name='email'
                 id='email'
                 onChange={handleChange}
                  />
                  <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                     type="password"
                     placeholder='Enter password here'
                     name='password'
                     id='pwd'
                     onChange={handleChange}
                     />
                  </div>
                  {error ? (
                    <div>
                        <p>Please check if your email or password is correct.</p>
                    </div>
                  ): null}
                  <button type='submit'>Login</button>
                    {/* need signup page link here*/}
                  <p></p>
            </form>
        </div>
    );
}

export default Login;