import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data}] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState},
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                 type='firstName'
                 name='firstName'
                 id='firstName'
                 placeholder='first name here'
                 onChange={handleChange}
                 />
                 <label htmlFor="lastName">Last Name:</label>
                 <input 
                 type="lastName"
                 name='firstName'
                 id='firstName'
                 placeholder='last name here'
                 onChange={handleChange}
                 />
                 <label htmlFor="email"></label>
                 <input
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder='email here'
                  onChange={handleChange}
                 />
                 <label htmlFor="password">Password:</label>
                 <input 
                 type="password" 
                 name="password" 
                 id="pwd"
                 placeholder='enter password here'
                 onChange={handleChange} 
                 />
                 <div>
                    <button type='submit'>Submit</button>
                 </div>
            </form>
        </div>
    );
}

export default Signup;