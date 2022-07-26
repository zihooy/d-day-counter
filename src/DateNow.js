import React  from 'react';
import Moment from 'react-moment';

export default class DateNow extends React.Component {
    
    render() {
            return (
                <Moment interval={1000} format="YYYY/MM/DD HH:mm:ss">
                </Moment>
            );
        
    }
}