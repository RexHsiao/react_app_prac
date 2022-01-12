import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDayForecastItem';

import './UpcomingDaysForecast.scss';

const UpcomingDaysForecast = ({ days }) => (
    <ul className="weekList d-flex justify-content-between p-0">
        {days.map((day) => (
            <UpcomingDaysForecastItem {...day} key={day.weekday} />
        ))}
        
    </ul>
);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;