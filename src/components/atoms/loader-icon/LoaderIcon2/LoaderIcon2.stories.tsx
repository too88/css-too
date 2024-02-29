import type { Meta, StoryObj } from "@storybook/react";

import { LoaderIcon2 } from "./LoaderIcon2";

const meta: Meta<typeof LoaderIcon2> = {
  component: LoaderIcon2,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {},
};
