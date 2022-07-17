import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Edit,
} from '@syncfusion/ej2-react-grids/index.js';
import React from 'react';
import { Container, PageContainer } from '../components/Commons.js';
import { ordersData } from '../data/dummy.js';
export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 w-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);
export const gridStatus = (props) => {
  let color = '#931414';
  switch (props.Status) {
    case 'pending':
      color = 'rgb(251, 150, 120)';
      break;
    case 'complete':
      color = 'rgb(139, 231, 139)';
      break;
    case 'active':
      color = 'rgb(3, 201, 215)';
      break;
    case 'canceled':
      color = 'rgb(255, 92, 142)';
      break;
    default:
      color = 'red';
  }

  return (
    <button
      style={{ backgroundColor: color, width: '4.5rem' }}
      className={`  p-2  rounded-full  text-white capitalize text-xs`}
    >
      {props.Status}
    </button>
  );
};
const Orders = () => {
  return (
    <PageContainer Title={'Orders'}>
      <GridComponent
        editSettings={{ allowEditing: true }}
        allowSorting={true}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        dataSource={ordersData}
        backgroundColor="transparent"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="ProductImage"
            template={gridOrderImage}
            headerText="Image"
            textAlign="center"
            width={'100px'}
            allowEditing={false}
          />
          <ColumnDirective
            field="OrderItems"
            headerText="Item"
            textAlign="center"
            width={'100px'}
            editType="dropdownedit"
          />
          <ColumnDirective
            field="CustomerName"
            headerText="Customer Name"
            textAlign="center"
            width={'100px'}
          />
          <ColumnDirective
            field="TotalAmount"
            headerText="Total Amount"
            textAlign="center"
            width={'100px'}
            editType="numericedit"
          />
          <ColumnDirective
            field="Status"
            textAlign="center"
            template={gridStatus}
            width={'100px'}
            editType="dropdownedit"
          />
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            textAlign="center"
            width={'100px'}
            allowEditing={false}
          />
          <ColumnDirective
            width={'100px'}
            field="Location"
            textAlign="center"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit]} />
      </GridComponent>
    </PageContainer>
  );
};

export default Orders;
