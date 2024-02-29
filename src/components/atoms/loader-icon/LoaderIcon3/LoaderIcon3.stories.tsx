import type { Meta, StoryObj } from "@storybook/react";

import { LoaderIcon3 } from "./LoaderIcon3";

const meta: Meta<typeof LoaderIcon3> = {
  component: LoaderIcon3,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {},
};
