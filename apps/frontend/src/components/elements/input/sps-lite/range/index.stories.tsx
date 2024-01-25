import type { Meta, StoryObj } from "@storybook/react";
import { entity } from "../../@sps/sps-website-builder-frontend/lib/redux/components/elements/input/mock/sps-lite";
import Root from "./index";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { IElement } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <RangeInput {...args} />,
  args: entity,
};

function RangeInput(args: IElement) {
  const methods = useForm({ mode: "all" });

  const { watch } = methods;
  const watchData = watch();

  useEffect(() => {
    console.log("🚀 ~ RangeInput ~ watchData:", watchData);
  }, [JSON.stringify(watchData)]);

  return (
    <FormProvider {...methods}>
      <Root {...args} />
    </FormProvider>
  );
}
