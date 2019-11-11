import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = ({inHome}) => {
    
    if (inHome) {
        return (
            <div className='flex justify-center pt6 pt7-ns'>
                <Spinner animation='border' role='status'>
                    <span className='sr-only'>Loading...</span>
                </Spinner>
                <span className='pl1'>Loading...</span>
            </div>
        )      
    }

    return (
        <div className='flex justify-center pa1'>
            <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
            </Spinner>
            <span className='pl1'>Loading...</span>
        </div>
    )
}

export default LoadingSpinner;