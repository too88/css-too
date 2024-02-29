import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerIcon } from "./HamburgerIcon";

const meta: Meta<typeof HamburgerIcon> = {
  component: HamburgerIcon,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {
    type: 1,
  },
};
export const TypeSecond: Story = {
  args: {
    type: 2,
  },
};
export const TypeThird: Story = {
  args: {
    type: 3,
  },
};
export const TypeFourth: Story = {
  args: {
    type: 4,
  },
};
export const TypeFifth: Story = {
  args: {
    type: 5,
  },
};
