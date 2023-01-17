import '../../../css/index.js';

export default {
  title: 'Components/Text/Typography',
  argTypes: {
    text: { control: 'text' },
    fontSize: { 
      control: { type: 'select' },
      options: [ '64px', '42px', '28px', '20px', '16px', '14px', '12px', '11px' ] 
    },
    fontWeight: {
      control: { type: 'select' },
      options: [ '700', '600', '500', '400' ]
    }
  },
};

const Template = ({ text, fontSize, fontWeight }) => {
    return `<p style='font-size: ${fontSize}; font-weight: ${fontWeight}'>${text}</p>`
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Typography',
  fontSize: '64px',
  fontWeight: '700',
};