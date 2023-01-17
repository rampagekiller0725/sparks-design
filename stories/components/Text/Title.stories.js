import '../../../css/index.js';

export default {
  title: 'Components/Text/Title',
  argTypes: {
    text: { control: 'text' },
    type: { 
      control: { type: 'select' },
      options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] 
    },
    fontWeight: {
      control: { type: 'select' },
      options: [ 'bold', 'normal', 'lighter' ]
    }
  },
};

const Template = ({ text, type, fontWeight }) => {
  if(type === 'h1') return `<h1 style='font-weight:${fontWeight}'>${text}</h1>`
  if(type === 'h2') return `<h2 style='font-weight:${fontWeight}${text}</h2>`
  if(type === 'h3') return `<h3 style='font-weight:${fontWeight}>${text}</h3>`
  if(type === 'h4') return `<h4 style='font-weight:${fontWeight}>${text}</h4>`
  if(type === 'h5') return `<h5 style='font-weight:${fontWeight}>${text}</h5>`
  if(type === 'h6') return `<h6 style='font-weight:${fontWeight}>${text}</h6>`
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Title',
  type: 'h1',
  fontWeight: 'bold',
};