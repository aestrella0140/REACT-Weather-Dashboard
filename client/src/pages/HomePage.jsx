 import {useQuery } from '@apollo/client';

 import Nav from '../components/header/nav';

 const Home = ({ name }) => {
    return (
        <main>
            <h2 className='hero-text'>Welcome, {name}</h2>
        </main>
    )
 }



