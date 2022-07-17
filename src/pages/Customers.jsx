import React from 'react';
import { PageContainer } from '../components/Commons';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Edit,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { customersData } from '../data/dummy';

const gridCustomer = (props) => (
  <div className="flex gap-2 items-center ">
    <img
      className="w-10 h-10 rounded-full"
      alt={`employee ${props.CustomerID}`}
      src={props.CustomerImage}
    />
    <div className="flex flex-col gap-1">
      <span>{props.CustomerName}</span>
      <span>{props.CustomerEmail}</span>
    </div>
  </div>
);

const gridStatus = (props) => {
  let Color = '#fff';
  switch (props.Status) {
    case 'Active':
      Color = 'rgb(139, 231, 139)';
      break;
    case 'Completed':
      Color = '#40ff40';
      break;
    case 'Pending':
      Color = 'rgb(254, 201, 15)';
      break;
    default:
      Color = 'red';
  }
  return (
    <div className="flex gap-2 items-center">
      <div
        className=" w-2 h-2 rounded-full"
        style={{ backgroundColor: Color }}
      ></div>
      <span>{props.Status}</span>
    </div>
  );
};

const Customers = () => {
  return (
    <PageContainer Title={'Customers'}>
      <GridComponent
        dataSource={customersData}
        editSettings={{ allowDeleting: true }}
        allowSorting
        pageSettings={{ pageSize: 6 }}
        allowPaging
        toolbar={['Delete']}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective
            width={'200'}
            headerText="Name"
            template={gridCustomer}
            textAlign="center"
            allowSorting={false}
          />
          <ColumnDirective
            width={'180'}
            field="ProjectName"
            textAlign="center"
            headerText="Project Name"
          />
          <ColumnDirective
            width="120"
            headerText="Status"
            template={gridStatus}
            textAlign="center"
            allowSorting={false}
          />
          <ColumnDirective field="Weeks" textAlign="center" width="100" />
          <ColumnDirective field="Budget" textAlign="center" width="100" />
          <ColumnDirective field="Location" textAlign="center" width="100" />
          <ColumnDirective
            field="CustomerID"
            textAlign="center"
            headerText="ID"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit, Toolbar]} />
      </GridComponent>
    </PageContainer>
  );
};

export default Customers;
