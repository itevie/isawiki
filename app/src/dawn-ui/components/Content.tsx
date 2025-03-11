import { HTMLAttributes, ReactNode } from "react";
import DivUtil from "./DivUtil";
import { combineClasses, UtilClassNames } from "../util";

/**
 * Used for margin basically
 * @param param0
 * @returns
 */
export default function Content({
  children,
  util,
  ...rest
}: {
  children: ReactNode;
  util?: UtilClassNames[];
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <DivUtil
      {...rest}
      className={combineClasses("dawn-content", rest.className, util)}
    >
      {children}
    </DivUtil>
  );
}
