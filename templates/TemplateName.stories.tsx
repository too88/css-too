import type { Meta, StoryObj } from "@storybook/react";

import { TemplateName } from "./TemplateName";

const meta: Meta<typeof TemplateName> = {
  component: TemplateName,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOne: Story = {
  args: {
    type: 1
  },
};

export const TypeSecond: Story = {
  args: {
    type: 1
  },
};

export const TypeThird: Story = {
  args: {
    type: 1
  },
};

export const TypeFourth: Story = {
  args: {
    type: 1
  },
};
