import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const Reservation = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
            showShortcuts={true}
        /> 
    );
};

export default Reservation;
