import '../../../css/index.js';

export default {
  title: 'Components/Text/Link',
  argTypes: {
    text: { control: 'text' },
    fontSize: { 
      control: { type: 'select' },
      options: [ '64px', '42px', '28px', '20px', '16px', '14px', '12px', '11px' ] 
    },
    fontWeight: {
      control: { type: 'select' },
      options: [ 'bold', 'normal', 'lighter' ]
    }
  },
};

const Template = ({ text, fontSize, fontWeight }) => {
    return `<a href='#' style='font-size: ${fontSize}; font-weight: ${fontWeight}'>${text}</a>`
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Example Link',
  fontSize: '64px',
  fontWeight: 'bold',
};