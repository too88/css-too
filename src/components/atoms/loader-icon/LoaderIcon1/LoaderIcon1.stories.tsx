import type { Meta, StoryObj } from "@storybook/react";

import { LoaderIcon1 } from "./LoaderIcon1";

const meta: Meta<typeof LoaderIcon1> = {
  component: LoaderIcon1,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {},
};
