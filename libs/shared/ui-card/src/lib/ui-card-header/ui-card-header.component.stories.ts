import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardHeaderComponent } from './ui-card-header.component';

const meta: Meta<UiCardHeaderComponent> = {
  component: UiCardHeaderComponent,
  title: 'UiCardHeaderComponent',
};
export default meta;
type Story = StoryObj<UiCardHeaderComponent>;

export const Primary: Story = {
  args: {},
};
