import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import './Forecast.scss';

const Forecast = ({ forecast }) => (
    <Container className="forecastBox">
        <Row>
            <Col xs={12} md={4}>
                <div className="card">
                    <CurrentDay {...forecast.currentDay}/>
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails}/>
                <UpcomingDaysForecast days={forecast.upcomingDays}/>
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
};

export default Forecast;