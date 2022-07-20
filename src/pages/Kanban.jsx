import React from 'react';
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban';
import { PageContainer } from '../components/Commons';
import { kanbanData } from '../data/dummy';
import { FcTodoList } from 'react-icons/fc';
import { GrInProgress } from 'react-icons/gr';
import { MdOutlinePreview, MdDone } from 'react-icons/md';
const Kanban = () => {
  const kanbanHeader = (props) => {
    switch (props.keyField) {
      case 'Open':
        return (
          <div className="flex gap-2 font-thin text-lg items-center ">
            <span className="bg-blue-600 text-white text-xl">
              <FcTodoList />
            </span>
            {props.keyField}
          </div>
        );
      case 'InProgress':
        return (
          <div className="flex gap-2 font-thin text-lg items-center">
            <span className="bg-yellow-600  text-white text-xl">
              <GrInProgress />
            </span>
            {props.keyField}
          </div>
        );

      case 'Testing':
        return (
          <div className="flex gap-2 font-thin text-lg  items-center">
            <span className=" bg-purple-600 text-white text-xl">
              <MdOutlinePreview />
            </span>
            {props.keyField}
          </div>
        );
      default:
        return (
          <div className="flex gap-2 font-thin text-lg  items-center">
            <span className=" bg-green-600 text-white text-xl">
              <MdDone />
            </span>
            {props.keyField}
          </div>
        );
    }
  };
  return (
    <PageContainer Title={'Kanban'}>
      <KanbanComponent
        dataSource={kanbanData}
        keyField="Status"
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText="To Do"
            keyField="Open"
            allowToggle={true}
            template={kanbanHeader}
          />
          <ColumnDirective
            headerText="In Progress"
            keyField="InProgress"
            allowToggle={true}
            template={kanbanHeader}
          />
          <ColumnDirective
            headerText="Testing"
            keyField="Testing"
            allowToggle={true}
            template={kanbanHeader}
          />
          <ColumnDirective
            headerText="Done"
            keyField="Close"
            allowToggle={true}
            template={kanbanHeader}
          />
        </ColumnsDirective>
      </KanbanComponent>
    </PageContainer>
  );
};

export default Kanban;
