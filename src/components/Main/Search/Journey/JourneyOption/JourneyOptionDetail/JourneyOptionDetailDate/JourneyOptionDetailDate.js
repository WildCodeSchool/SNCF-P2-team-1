import React, { useState } from 'react';
import './JourneyOptionDetailDate.css';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
setDefaultLocale('fr');


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function JourneyOptionDetailDate() {
    const [startDate, setStartDate] = useState (new Date());
   
  return (
    <DatePicker
    locale="fr"
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      maxDate={addDays(new Date(), 60)}
      placeholderText="Select a date between today and 5 days in the future"
      dateFormat="dd/MM/yyyy"
    />
  );
}
export default JourneyOptionDetailDate;
