import type { Meta, StoryObj } from '@storybook/angular';
import { UiSpinnerComponent } from './ui-spinner.component';

const meta: Meta<UiSpinnerComponent> = {
  component: UiSpinnerComponent,
  title: 'UiSpinnerComponent',
};
export default meta;
type Story = StoryObj<UiSpinnerComponent>;

export const Primary: Story = {
  args: {
    type: '',
    size: '',
  },
};
export const Secondary: Story = {
  args: {
    type: '',
    size: 'small',
  },
};