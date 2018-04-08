import React from 'react';
import ReactDOM from 'react-dom';
// import NavigationBar from './components/navigation-bar';
import CreateForm from './components/create-form';
import './index.css';
import './responsive.css';
import registerServiceWorker from './registerServiceWorker';

const links = [{
    text: 'Home',
    href: '#'
}, {
    text: 'Portfolio',
    href: '#'
},
              {
    text: 'Financial Documentation',
    href: '#'
},
              {
    text: 'Public Disclosures',
    href: '#'
}];

const img= 'http://www.insiten.com/wp-content/uploads/2017/12/logo_243_50.png'


ReactDOM.render(
  // <NavigationBar title="Insiten" links={links} img={img}/>,
  <CreateForm />,
  document.getElementById('root')
);
registerServiceWorker();