import React, { Fragment } from 'react';
import Header from '../../App/Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import UseForecast from '../../Hooks/UseForecast';

import './Page.scss';

const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = UseForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className="box">
                    {!isLoading && <Form submitSearch={onSubmit}/>}
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast}/>}
        </Fragment>
    );
};

export default Page;