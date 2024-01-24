"use client";

import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as layoutApi } from "@sps/sps-website-builder-frontend/lib/redux/entities/layout/api";
import { useParams, usePathname } from "next/navigation";
import { IEntity as IBackendLayout } from "@sps/sps-website-builder-frontend/lib/redux/entities/layout/interfaces";
import { IEntity as IBackendLoader } from "@sps/sps-website-builder-frontend/lib/redux/entities/loader/interfaces";
import { slice as userSlice } from "~redux/auth/slice";

export interface ILayout extends IBackendLayout {
  children: ReactNode;
  loader?: IBackendLoader | null;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Layout({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useDispatch();
  // const userId = useSelector((state: any) => state.user?.id);
  // console.log("🚀 ~ Layout ~ userId:", userId);
  const { data: layout, error } = layoutApi.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );

  useEffect(() => {
    dispatch(userSlice.actions.setAnonymusUsername());
  }, []);

  // Clear cache if user jwt is wrong
  useEffect(() => {
    // @ts-ignore
    if (error?.status === 401 && typeof window !== "undefined") {
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        window.localStorage.removeItem("jwt");
        window.location.reload();
      }
    }
  }, [error]);

  const Comp = layout
    ? variants[layout.variant as keyof typeof variants]
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
