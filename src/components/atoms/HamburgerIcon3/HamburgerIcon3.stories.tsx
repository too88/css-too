import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerIcon3 } from "./HamburgerIcon3";

const meta: Meta<typeof HamburgerIcon3> = {
  component: HamburgerIcon3,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {
    type: 1,
    spanAmount: 3
  },
};
export const TypeSecond: Story = {
  args: {
    type: 2,
    spanAmount: 6
  },
};
export const TypeThird: Story = {
  args: {
    type: 3,
    spanAmount: 4
  },
};
export const TypeFourth: Story = {
  args: {
    type: 4,
    spanAmount: 3
  },
};
