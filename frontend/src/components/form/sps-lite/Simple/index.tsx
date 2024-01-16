import { api as formRequestApi } from "~redux/services/backend/extensions/sps-crm/api/form-request/api";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "~components/elements/input";
import useGetPreparedFormInputs from "~hooks/use-get-prepared-form-inputs";
import { IForm } from "../..";
import TextInput from "~components/ui/input/text";
import RadioGroupInput from "~components/ui/input/radio-group";
import Button from "~components/ui/button";

export default function Simple(props: IForm) {
  const [createFormRequest, { data }] = formRequestApi.useCreateMutation();
  const preparedInputs = useGetPreparedFormInputs(props);

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log("🚀 ~ Simple ~ watchData", watchData);
  }, [watchData]);

  useEffect(() => {
    if (data) {
      reset();

      if (typeof props.successCallback === "function") {
        props.successCallback(data);
      }
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    // console.log("🚀 ~ onSubmit ~ data", data);

    createFormRequest({ data, files: data.files });
  }

  return (
    <div
      data-collection-type="form"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="form-container">
        <FormProvider {...methods}>
          {preparedInputs?.map((input, index: number) => {
            return (
              <Input
                {...input.input}
                key={index}
                options={input.options}
                name={input.inputName}
                className={input.input?.className || ""}
                by={input.input?.by || undefined}
                rules={{
                  required: {
                    value: input.input?.isRequired,
                    message: "Required field",
                  },
                }}
              />
            );
          })}

          {preparedInputs?.map((input, index: number) => {
            return (
              <TextInput
                {...input}
                key={index}
                variant="text"
                type="text"
                name={`inputs[${index}].key`}
                initialValue={input.input.name}
                by="id"
                className="!hidden"
                rules={{
                  required: {
                    value: input.input?.isRequired,
                    message: "Required field",
                  },
                }}
              />
            );
          })}

          <RadioGroupInput
            variant="radio-group"
            name="form"
            initialValue={props}
            options={[props]}
            className="hidden"
            by="id"
          />
          <div className="submit-button-container">
            {props.button ? (
              <Button
                className={props.button.className || ""}
                data-ui-variant={props.button?.variant || "secondary"}
                onClick={handleSubmit(onSubmit)}
              >
                {props.button?.title || "Submit"}
              </Button>
            ) : null}
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
