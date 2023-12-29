import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// need day.jsx in components import here


const dayList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const city = Phoenix;
        
        fetch('api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=32f9135a06190d905755e84b2baa48f7&units=imperial')
        .then((res) => res.json())
        .then((data) => {
            setData(data.daily)
        })
    }, [])

    return (
        <div>
        { data && <Day data = { data } /> }
        </div>
    );
}

export default dayList;