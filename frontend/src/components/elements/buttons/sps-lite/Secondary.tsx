import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import FlyoutMenus from "~components/flyout-menus";

export default function Secondary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props?.onClick) {
    return (
      <div className={props?.className || ``}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-secondary"
        >
          {props.title}
        </button>
      </div>
    );
  }

  if (props?.flyoutMenu) {
    return (
      <div className={props?.className || ``}>
        <FlyoutMenus {...props} />
      </div>
    );
  }

  if (url) {
    return (
      <div className={props?.className || ``}>
        <Link
          {...additionalAttributes}
          href={url}
          aria-selected={isActive}
          className="button-secondary"
        >
          {props.title}
        </Link>
      </div>
    );
  }

  return (
    <div className={props?.className || ``}>
      <button {...additionalAttributes} className="button-secondary">
        {props.title}
      </button>
    </div>
  );
}
