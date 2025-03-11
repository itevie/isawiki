import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { combineClasses, UtilClassNames } from "../util";
import Row from "./Row";
import GoogleMatieralIcon from "./GoogleMaterialIcon";
import { ButtonType } from "./Button";

const Chip = forwardRef<
  HTMLButtonElement,
  {
    icon: string;
    disabled?: boolean;
    type?: ButtonType;
    big?: boolean;
    util?: UtilClassNames[];
    children?: ReactNode;
  } & HTMLAttributes<HTMLButtonElement>
>(({ icon, type, children, big, disabled, util, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      {...rest}
      className={combineClasses(
        "dawn-button",
        "round",
        rest.className,
        type && `dawn-${type}`,
        big ? `dawn-big` : "",
        util
      )}
    >
      <Row util={["small-gap"]}>
        <GoogleMatieralIcon name={icon} size="16px" />
        {children}
      </Row>
    </button>
  );
});

export default Chip;
