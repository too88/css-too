import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerIcon4 } from "./HamburgerIcon4";

const meta: Meta<typeof HamburgerIcon4> = {
  component: HamburgerIcon4,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {
    type: 1,
    spanAmount: 9
  },
};
export const TypeSecond: Story = {
  args: {
    type: 2,
    spanAmount: 3
  },
};
export const TypeThird: Story = {
  args: {
    type: 3,
    spanAmount: 3
  },
};
export const TypeFourth: Story = {
  args: {
    type: 4,
    spanAmount: 3
  },
};
export const TypeFifth: Story = {
  args: {
    type: 5,
    spanAmount: 3
  },
};
export const TypeSixth: Story = {
  args: {
    type: 6,
    spanAmount: 3
  },
};
export const TypeSeventh: Story = {
  args: {
    type: 7,
    spanAmount: 3
  },
};
export const TypeEighth: Story = {
  args: {
    type: 8,
    spanAmount: 3
  },
};
