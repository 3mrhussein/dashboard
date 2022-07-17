import React from 'react';
import { PageContainer } from '../components/Commons';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
const Calendar = () => {
  return (
    <PageContainer Title={'Calendar'}>
      <div className="flex justify-end">
        <DatePickerComponent
          width={150}
          value={new Date()}
          style={{
            border: '1px solid #ccc',
            padding: 3,
            borderRadius: '10px',
            textAlign: 'center',
            fontWeight: 500,
          }}
        />
      </div>
      <ScheduleComponent
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        height="450"
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </PageContainer>
  );
};

export default Calendar;
