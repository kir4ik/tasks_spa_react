import { Link } from 'react-router-dom';
import TaskTableRow from '../../../components/TaskListTable/TaskTableRow';

const tableAgreement = [
    {propName: 'name', isLink: true},
    {propName: 'due_date'}
];
const task = {
    id: 12,
    name: "Today_task12",
    creation_date: "2015-04-21T06:50:21",
    due_date: "2015-04-22T23:59:00",
    start_date: "2015-04-21T00:00:01",
    is_completed: false,
    is_archived: false,
    estimated_effort: 5.5,
    actual_effort: 3.3,
    physical_progress: 60,
    obj_status: "active",
    description: "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
    project_id: 0
};

describe('Test <TaskTableRow />', () => {
    it('contain <td/> equal length from props tableAgreement', () => {
        const wrapper = shallow(<TaskTableRow task={task} tableAgreement={tableAgreement} />);
        expect(wrapper.find('td')).to.have.length(tableAgreement.length);
    });

    it('<td /> for task name contain <Link />', () => {
        const wrapper = shallow(<TaskTableRow task={task} tableAgreement={tableAgreement}/>);
        expect(wrapper.find('td').at(0).find(Link)).to.have.length(1);
    });
})