import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardFooterComponent } from './ui-card-footer.component';

const meta: Meta<UiCardFooterComponent> = {
  component: UiCardFooterComponent,
  title: 'UiCardFooterComponent',
};
export default meta;
type Story = StoryObj<UiCardFooterComponent>;

export const Primary: Story = {
  args: {},
};
