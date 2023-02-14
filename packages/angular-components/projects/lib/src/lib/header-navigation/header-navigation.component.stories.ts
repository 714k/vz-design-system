import { Meta, Story } from '@storybook/angular/';
import { HeaderNavigationComponent } from './header-navigation.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/HeaderNavigation',
  component: HeaderNavigationComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: 'In this section',
};