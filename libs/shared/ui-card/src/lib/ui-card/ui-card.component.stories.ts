import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardComponent } from './ui-card.component';

const meta: Meta<UiCardComponent> = {
  component: UiCardComponent,
  title: 'UiCardComponent',
};
export default meta;
type Story = StoryObj<UiCardComponent>;

export const Primary: Story = {
  args: {},
};
