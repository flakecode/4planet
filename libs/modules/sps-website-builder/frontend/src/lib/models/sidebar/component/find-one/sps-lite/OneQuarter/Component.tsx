import { Component as PageBlocks } from "../../../../../../components/page-blocks/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="sidebar"
      data-variant={props.variant}
      className={props.data.className || ""}
    >
      <PageBlocks
        variant="default"
        isServer={props.isServer}
        pageBlocks={props.data.pageBlocks}
      />
    </div>
  );
}
