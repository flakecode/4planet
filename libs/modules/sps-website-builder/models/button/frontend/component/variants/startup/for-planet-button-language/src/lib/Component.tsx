"use client";

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
    >
      <Popover>
        <PopoverTrigger asChild={true}>
          <Button ui="sps" data-ui-variant="outline" onClick={() => {}}>
            РУ
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mt-5 p-1 border border-[#EFEFEF] shadow-none rounded-[20px] overflow-hidden w-[200px]">
          <div className="flex flex-col gap-2 bg-white">
            <Button
              ui="sps"
              data-ui-variant="ghost"
              url="/ru"
              className="w-full rounded-[20px] text-xl py-3.5 lg:py-4"
            >
              Русский(РУ)
            </Button>
            <Button
              ui="sps"
              data-ui-variant="ghost"
              url="/"
              className="w-full rounded-[20px] text-xl py-3.5 lg:py-4"
            >
              English (EN)
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
