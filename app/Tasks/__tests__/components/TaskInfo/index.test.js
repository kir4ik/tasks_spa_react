import TaskInfo from '../../../components/TaskInfo';
import TaskTitle from '../../../components/TaskInfo/TaskTitle';
import TaskColumn from '../../../components/TaskInfo/TaskColumn';

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

describe('Test <TaskInfo />', () => {
    it(`contain 
    - 1 <TaskTitle />
    - 8 <TaskColumn />`, () => {
        const wrapper = shallow(<TaskInfo task={task} />);
        expect(wrapper.find(TaskTitle)).to.have.length(1);
        expect(wrapper.find(TaskColumn)).to.have.length(8);
    });
})