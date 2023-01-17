import '../../../css/index.js';

export default {
  title: 'Components/Button/Primary',
  argTypes: {
    text: { control: 'text' },
    status: {
        control: { type: 'select' },
        options: ['active', 'disabled', 'destructive']
    }
  },
};

const Template = ({ text, status }) => {
    if(status === 'active') return `<button type='button' class='primary-button' style='background-color: var(--accent-purple)'>${text}</button>`;
    if(status === 'disabled') return `<button type='button' class='primary-button' style='background-color: var(--gray3)' disabled='disabled'${text}</button>`;
    if(status === 'destructive') return `<button type='button' class='primary-button' style='background-color: var(--braun-red)'>${text}</button>`;
};

export const button = Template.bind({});

button.args = {
  text: 'Button',
  status: 'active'
};