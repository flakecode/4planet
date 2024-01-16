import FileInput from "~components/ui/input/file";
import { IElement } from "../..";

export default function File(props: IElement) {
  return (
    <FileInput
      {...props}
      data-component="elements.input"
      label={props.label || undefined}
      placeholder={props.placeholder || undefined}
      multiple={undefined}
      className={props.className || ""}
      type="date"
      step={undefined}
      min={undefined}
      max={undefined}
      value={undefined}
      id={undefined}
    />
  );
}