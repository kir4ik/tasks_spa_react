import TaskColumn from '../../../components/TaskInfo/TaskColumn';

describe('Test <TaskColumn />', () => {
    it('contain 2 <span />', () => {
        const wrapper = shallow(<TaskColumn />);
        expect(wrapper.find('span')).to.have.length(2);
    });

    it('spans contains text', () => {
        const text = 'Some text for span 1';
        
        const wrapper = shallow(<TaskColumn name={text} val={text} />);
        expect(wrapper.find('span').at(0).text()).to.contain(text);
        expect(wrapper.find('span').at(1).text()).to.contain(text);
    });
})