const Day = ( {data} ) => {
    return (
        <div>
            {data.map((day) => (
                <div>
                    <div>{day.temp}</div>
                    <div>{day.temp_min}</div>
                    <div>{day.temp_max}</div>
                    <div>{day.humidity}</div>
                </div>
            ))}
        </div>
    );
}

export default Day;