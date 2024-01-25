import { useEffect, useState } from 'react';


const weather = () => {
    const [city, setCity] = useState('');
    const [weatherData] = useState(null);

    const fetchApi = async () => {
        fetch(`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=32f9135a06190d905755e84b2baa48f7&units=imperial`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    weather
                });
                
            });
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchApi
    };

    return (
        <div>
            <div>
                <h2>5-Day Weather forcast</h2>
                <form onSubmit={handleSubmit}>
                    <p><input type="text" className='cityInput' value={city} onChange={handleInputChange}/></p>
                    <button>Search</button>
                </form>
                {weatherData ? (
                <>
                    <div>
                        <p className='weather'>{weatherData.name}</p>
                        <div className='image'></div>
                        <p className='low'>{weatherData.main.temp_min}</p>
                        <p className='temp'>{weatherData.main.temp}</p>
                        <p className='high'>{weatherData.main.temp_max}</p>
                        <p className='humid'>{weatherData.main.humidity}</p>
                        <p className='wind'>{weatherData.main.feels_like}</p>
                    </div>
                </>

                ) : (
                    <p>loading....</p>
                )}
               
            </div>
        </div>
    );
};


export default weather;