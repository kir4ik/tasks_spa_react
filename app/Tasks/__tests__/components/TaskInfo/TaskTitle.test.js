import TaskTitle from '../../../components/TaskInfo/TaskTitle';

describe('Test <TaskTitle />', () => {
    it('contain h1', () => {
        const wrapper = shallow(<TaskTitle />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('h1 contain text', () => {
        const title = 'Some Title';
        
        const wrapper = shallow(<TaskTitle title={title}/>);
        expect(wrapper.find('h1').at(0).text()).to.contain(title);
    });

    it('then property isEdit equal true, h1 replaced of input', () => {
        const wrapper = shallow(<TaskTitle isEdit={true} />);
        expect(wrapper.find('h1')).to.have.length(0);
        expect(wrapper.find('input')).to.have.length(1);
    });
})