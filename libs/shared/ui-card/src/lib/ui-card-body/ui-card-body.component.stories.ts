import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardBodyComponent } from './ui-card-body.component';

const meta: Meta<UiCardBodyComponent> = {
  component: UiCardBodyComponent,
  title: 'UiCardBodyComponent',
};
export default meta;
type Story = StoryObj<UiCardBodyComponent>;

export const Primary: Story = {
  args: {},
};
