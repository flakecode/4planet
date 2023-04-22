"use client";

import { useState, useEffect, FC } from "react";
import { ISpsLiteSlideOver, variants as spsStoreVariants } from "./sps-lite";
import { useGetSlideOversQuery } from "~redux/services/backend/models/slide-overs";
import { useSearchParams } from "next/navigation";

const variants = {
  ...spsStoreVariants,
};

export interface ISlideOver extends ISpsLiteSlideOver {}

export default function SlideOvers() {
  const query = useSearchParams();
  const openedSlideOver = query?.get("opened_slide_over");
  const [isOpen, setIsOpen] = useState(false);
  const [slideOverProps, setSlideOverProps] =
    useState<Omit<ISlideOver, "isOpen" | "setIsOpen">>();

  const { data: slideOvers } = useGetSlideOversQuery({
    locale: "all",
  });

  useEffect(() => {
    if (!slideOvers) {
      return;
    }

    for (const slideOver of slideOvers) {
      if (openedSlideOver === slideOver.uid) {
        setSlideOverProps(slideOver);
      }
    }
  }, [slideOvers, openedSlideOver]);

  useEffect(() => {
    if (openedSlideOver && !isOpen) {
      setIsOpen(true);
    } else if (!openedSlideOver && isOpen) {
      setIsOpen(false);
    }
  }, [query]);

  const Comp = variants[
    slideOverProps?.variant as keyof typeof variants
  ] as FC<ISlideOver>;

  if (!Comp || !slideOverProps) {
    return <></>;
  }

  return <Comp {...slideOverProps} isOpen={isOpen} setIsOpen={setIsOpen} />;
}
