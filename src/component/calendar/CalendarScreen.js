import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/es";
import Navbar from "../ui/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {messages} from "../../helpers/calendar-messages";

moment.locale('es');
const localizer = momentLocalizer(moment);
const events = [{
    title:'Cumple de hydhd',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}]

const CalendarScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor:'#367CF7',
            borderRadius: '0',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return{
            style
        }
    }

    return (
        <div className={"calendar-screen"}>
            <Navbar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
};

export default CalendarScreen;
