import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  GridComponent,
  Inject,
  Page,
  Search,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import { PageContainer } from '../components/Commons';
import { employeesData } from '../data/dummy';
import { GoLocation } from 'react-icons/go';
const gridEmployee = (props) => (
  <div className="flex gap-2 items-center ">
    <img
      className="w-10 h-10 rounded-full"
      alt={`employee ${props.EmployeeID}`}
      src={props.EmployeeImage}
    />
    <span>{props.Name}</span>
  </div>
);
const gridLocation = (props) => (
  <div className="flex gap-2  items-center">
    <GoLocation />
    <span>{props.Country}</span>
  </div>
);
const Employees = () => {
  return (
    <PageContainer Title={'Employees'}>
      <GridComponent
        dataSource={employeesData}
        allowSorting
        toolbar={['Search']}
        pageSettings={{ pageSize: 6 }}
        allowPaging
      >
        <ColumnsDirective>
          <ColumnDirective
            width="180"
            template={gridEmployee}
            field="Name"
            textAlign="center"
            headerText="Employee"
            allowSorting={false}
          />
          <ColumnDirective
            width="180"
            field="Title"
            textAlign="center"
            headerText="Designation"
          />
          <ColumnDirective
            width="100"
            field="Country"
            template={gridLocation}
            textAlign="center"
            allowSorting={false}
          />
          <ColumnDirective
            width="150"
            field="HireDate"
            textAlign="center"
            headerText="Hire Date"
          />
          <ColumnDirective
            width="130"
            field="ReportsTo"
            headerText="Reports To"
            textAlign="center"
          />
          <ColumnDirective
            field="EmployeeID"
            headerText="ID"
            width="80"
            textAlign="center"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit, Search, Toolbar]} />
      </GridComponent>
    </PageContainer>
  );
};

export default Employees;
