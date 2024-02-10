import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <nav
      data-collection-type="navbar"
      data-variant={props.variant}
      className={
        props.className ||
        "absolute z-20  max-w-[1440px] py-8 w-full left-[15%]"
      }
    >
      <div className="navbar-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          pageBlocks={props.pageBlocks}
        />
      </div>
    </nav>
  );
}
