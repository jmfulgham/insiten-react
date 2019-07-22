import React from 'react';
import Company from '../components/company/Company';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import companyInfo from './mock';
import Card from '@material-ui/core/Card';

configure({adapter: new Adapter()});

describe('<Company/>', ()=>{

    let wrapper = shallow(<Company companyDetails={companyInfo}/>);

    it('renders as a card', ()=>{
        expect(wrapper.find(Card).exists()).toBe(true);
    });

    it('includes the Company Name, Status, and Code', ()=>{
        expect(wrapper.props()).toBe('ABC Reit');
    });
});