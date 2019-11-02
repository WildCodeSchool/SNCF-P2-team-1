import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import './JourneyOptionDetailDate.css';
import DatePicker from 'react-datepicker';
import {addDays} from 'date-fns';
import {registerLocale, setDefaultLocale} from 'react-datepicker';
import fr from 'date-fns/locale/fr';

registerLocale('fr', fr);
setDefaultLocale('fr');

function JourneyOptionDetailDate() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const changeDate = date => {
    dispatch({type: 'ADD_DATE', date: date.toISOString().split('T')[0]});
    setStartDate(date);
  };

  return (
    <div className="col-lg-4 col-6 my-3">
      <DatePicker
        locale="fr"
        selected={startDate}
        onChange={date => changeDate(date)}
        minDate={new Date()}
        maxDate={addDays(new Date(), 60)}
        placeholderText="Select a date between today and 5 days in the future"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}
export default connect(
  null,
  null
)(JourneyOptionDetailDate);
