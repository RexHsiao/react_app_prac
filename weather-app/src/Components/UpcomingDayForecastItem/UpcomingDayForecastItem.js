import React from 'react';
import './UpcomingDayForecastItem.scss';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDayForecastItem = ({ weekday, temperature, imgUrl }) => (
    <li className="weekday d-flex flex-column justify-content-center align-items-center p-2">
        <img src={`${imgUrlBase}img/weather/${imgUrl}.svg`} width="30" alt="" className="mb-2" />
        <span className="mb-2">{weekday}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
    </li>
);

export default UpcomingDayForecastItem;