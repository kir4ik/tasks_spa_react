import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.expect = expect;

// component TaskInfo
import '../app/Tasks/__tests__/components/TaskInfo/TaskTitle.test';
import '../app/Tasks/__tests__/components/TaskInfo/TaskColumn.test';
import '../app/Tasks/__tests__/components/TaskInfo/index.test';

// component TaskListTable
import '../app/Tasks/__tests__/components/TaskListTable/TaskTableRow.test';
import '../app/Tasks/__tests__/components/TaskListTable/index.test';