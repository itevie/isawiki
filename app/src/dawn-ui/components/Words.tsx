import { HTMLAttributes, ReactNode } from "react";
import { combineClasses, UtilClassNames } from "../util";

/**
 * navbar = The text used for the navbar
 * page-title = The title of the page, should only be one
 * container-title = The title of a container, should only be one per container
 * heading = A section of a container
 * normal = Normal text, this is the default
 */
export type TextType =
  | "navbar"
  | "page-title"
  | "container-title"
  | "heading"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "normal";

export default function Words({
  type,
  children,
  util,
  ...rest
}: {
  type?: TextType;
  children?: ReactNode;
  util?: UtilClassNames[];
} & HTMLAttributes<HTMLLabelElement | HTMLHeadingElement>) {
  const props = {
    ...rest,
    className: combineClasses(
      `dawn-text dawn-text-${type ?? "normal"}`,
      rest.className,
      util
    ),
  };
  return (
    {
      heading: <h1 {...props}>{children}</h1>,
      heading2: <h2 {...props}>{children}</h2>,
      heading3: <h3 {...props}>{children}</h3>,
      heading4: <h4 {...props}>{children}</h4>,
      heading5: <h5 {...props}>{children}</h5>,
      heading6: <h6 {...props}>{children}</h6>,
    }[type as string] || <label {...props}>{children}</label>
  );
}
