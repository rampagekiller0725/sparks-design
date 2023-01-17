import '../../../css/index.js';
import pwdVisible from '../../../assets/icons/pwd-visible.png';
import pwdInvisible from '../../../assets/icons/pwd-invisible.png';

import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Input/Password',
  argTypes: {
    title: { control: 'text' },
    errormsg: { control: 'text' },
    placeholder: { control: 'text' },
    status: {
        control: { type: 'select' },
        options: ['active', 'disabled', 'error']
    }
  },
};

const Template = ({ title, errormsg, placeholder, status, onClick }) => {
    switch(status) {
        case 'active':
            return `<p class='password-title'>${title}</p>
            <input type='password' class='password-active' placeholder='${placeholder}'/>
            <span><img id='pwd-icon' src=${pwdVisible} ${onClick} /></span>`;
        case 'disabled':
            return `<p class='password-title'>${title}</p>
            <input type='password' class='password-disable' placeholder='${placeholder}' disabled='disabled'/>
            <span><img id='pwd-icon' src=${pwdVisible} onclick='changeIcon()' /></span>`;
        case 'error':
            return `<p class='password-title-error'>${title}</p>
            <input type='password' class='password-error' placeholder='${placeholder}'/>
            <span><img id='pwd-icon' src=${pwdVisible} onclick='changeIcon()' /></span>
            <p class='password-errormsg'>${errormsg}</p>`;
        default:
            return `<p class='forminput-title'>${title}</p>
            <input type='password' class='password' placeholder=${placeholder}/>
            <span><img id='pwd-icon' src=${pwdVisible} onclick='action()' /></span>`;
    }

};

export const primary = Template.bind({});

// primary.play = async ({ canvasElement }) => {
//     console.log('asdf');
//     const canvas = within(canvasElement);
//     await userEvent.click(canvas.getByTestId('pwd-icon'));
// }

primary.args = {
  title: 'Password',
  errormsg: 'Error message appears beneath the field.',
  placeholder: 'Enter Password',
  status: 'active',
  actions: { argTypesRegex: '^on.*' },
  onClick: action('clicked'),
};