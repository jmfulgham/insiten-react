import React from 'react';
import CreateForm from '../components/createForm/CreateForm';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import companyInfo from './mock';
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
configure({adapter: new Adapter()});

describe('<CreateForm/>', () => {

    let wrapper = shallow(<CreateForm/>);


    it('renders', ()=>{
        expect(wrapper.exists()).toBe(true);
    });

    it('has the correct status options',()=>{
        let select = wrapper.find(Select);
       expect(select.props().children).toHaveLength(4);
       expect(select.props().children[1].key).toBe('Approved');
    });

    it('updates the state on change', ()=>{
        let textField = wrapper.find(TextField).at(1);
        textField.simulate('blur', { target: { name: "Company Name", value: "Test 123" }});
        try{
          wrapper.update();
          expect(wrapper.state().companyInfo["Company Name"]).toBe("Test 123");
      } catch (e){
          console.log(e);
          fail(e)
         }
    });

});