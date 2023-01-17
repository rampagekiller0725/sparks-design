import '../../../css/index.js';

export default {
  title: 'Components/Input/FormInput',
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

const Template = ({ title, errormsg, placeholder, status }) => {
    switch(status) {
        case 'active':
            return `<p class='forminput-title'>${title}</p>
            <input type='text' class='forminput-active' placeholder='${placeholder}'/>`;
        case 'disabled':
            return `<p class='forminput-title'>${title}</p>
            <input type='text' class='forminput-disable' placeholder='${placeholder}' disabled='disabled'/>`;
        case 'error':
            return `<p class='forminput-title-error'>${title}</p>
            <input type='text' class='forminput-error' placeholder='${placeholder}'/>
            <p class='forminput-errormsg'>${errormsg}</p>`;
        default:
            return `<p class='forminput-title'>${title}</p>
            <input type='text' class='forminput' placeholder=${placeholder}/>`;
    }
};

export const primary = Template.bind({});

primary.args = {
  title: 'Name',
  errormsg: 'Error message appears beneath the field.',
  placeholder: 'Enter Name',
  status: 'active'
};