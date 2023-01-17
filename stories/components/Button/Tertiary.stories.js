import '../../../css/index.js';

export default {
  title: 'Components/Button/Tertiary',
  argTypes: {
    text: { control: 'text' },
    status: {
        control: { type: 'select' },
        options: ['active', 'disabled', 'destructive']
    }
  },
};

const Template = ({ text, status }) => {
    if(status === 'active') return `<a href='#' class='tertiary-button' style='color: var(--accent-purple)'>${text}</a>`;
    if(status === 'disabled') return `<a href='#' class='tertiary-button' style='color: var(--gray3)' disabled='disabled'>${text}</a>`;
    if(status === 'destructive') return `<a href='#' class='tertiary-button' style='color: var(--braun-red)'>${text}</a>`;
};

export const button = Template.bind({});

button.args = {
  text: 'Button',
  status: 'active'
};