import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";
import { Button } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.button"
      data-variant={props.data.variant}
      data-ui-variant={props.data.variant}
      {...(props.data.url ? { url: props.data.url } : {})}
    >
      <Popover
        data-module="sps-website-builder"
        data-model="flyout"
        data-variant={props.variant}
      >
        <PopoverTrigger asChild={true}>
          <Button
            ui="sps"
            data-module="sps-website-builder"
            data-model="elements.button"
            data-variant={props.data.variant}
            data-ui-variant="link"
            className="w-full py-3.5 px-7 lg:p-0 "
            onClick={() => {}}
          >
            РУ
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1 border border-[#EFEFEF] shadow-none rounded-[20px] w-[200px]">
          <div className="flex flex-col gap-2 bg-white">
            <Button
              ui="sps"
              data-module="sps-website-builder"
              data-model="elements.button"
              data-variant={props.data.variant}
              data-ui-variant="link"
              className="w-full border-none text-lg text-[#1D1D1D] hover:bg-[#F3F3F3] hover:no-underline"
              url="/"
            >
              Русский(РУ)
            </Button>
            <Button
              ui="sps"
              data-module="sps-website-builder"
              data-model="elements.button"
              data-variant={props.data.variant}
              data-ui-variant="link"
              className="w-full border-none text-lg text-[#1D1D1D] hover:bg-[#F3F3F3] hover:no-underline"
              url="/landing"
            >
              English (EN)
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
