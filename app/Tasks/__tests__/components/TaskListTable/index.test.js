import TaskListTable from '../../../components/TaskListTable';
import TaskTableRow from '../../../components/TaskListTable/TaskTableRow';

const tasks = [
    { id: 12, name: "Today_task12", }, { id: 13,  name: "Today_task12", }
];
const tableAgreement = [
    {propName: 'name', title: 'task name'},
    {propName: 'due_date', title: 'due date'}
];

describe('Test <TaskListTable />', () => {
    it(`contain count <th /> = length prop tableAgreement`, () => {
        const wrapper = shallow(<TaskListTable tasks={tasks} tableAgreement={tableAgreement} />);
        expect(wrapper.find('th')).to.have.length(tableAgreement.length);
    });

    it(`contain count <TaskTableRow /> = count prop tasks`, () => {
        const wrapper = shallow(<TaskListTable tasks={tasks} tableAgreement={tableAgreement} />);
        expect(wrapper.find(TaskTableRow)).to.have.length(tasks.length);
    });
})