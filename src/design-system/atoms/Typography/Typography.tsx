import styled from "@emotion/styled";
import { FC } from "react";
import {
  Theme,
  Typography as MTypography,
  TypographyProps as MTypographyProps,
} from "@mui/material";


export interface TypographyProps extends Omit<MTypographyProps, "variant"> {
  weight?: "bold" | "regular" | "thin" | "medium" | "light"| "italic"| "old"| "zombie";
  size?:
  | "body"
  | "bodyBold"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "small"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"
  | string;
  truncate?: boolean;
  margin?: string;
  link?: any;
  lines?: number;
  color?: string;
  type?: "link";
}

interface IStyledTypography {
  theme?: Theme;
  fontSize: string;
  margin?: string;
  link?: any;
  lines?: number;
  color?: string;
  type?: string;
}

const StyledTypography = styled(MTypography) <IStyledTypography>`
  font-size: ${({ fontSize }) => fontSize} !important;
  letter-spacing: 0;
  cursor: ${(props) => (props.link ? "pointer" : "inherit")};
  display: ${(props) => (props.display ? "block" : "flex")};
  align-items: center;
  color: ${({ color }) => color};

  &.truncate {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ lines }) => lines};
  }

  :hover {
    cursor: ${(props) => (props.type === "link" ? "pointer !important" : "")};
    text-decoration: ${(props) =>
    props.type === "link" ? "underline" : "none"};
  }
`;

export const Typography: FC<TypographyProps> = (
  { size, weight, children, truncate, lines, ...props },
  ref
) => {
  const fontSize =
    size && (size.includes("rem") || size.includes("px")) ? size : undefined;
  const variant = (
    size && !fontSize ? size : "body"
  ) as MTypographyProps["variant"];

  return (
    <StyledTypography
      className={truncate ? "truncate " + props.className : props.className}
      fontFamily={`doidon ${weight ? weight : "regular"}`}
      fontSize={size === "subtitle1" ? "1.1rem" : (fontSize as any)}
      lines={lines}
      variant={variant}
      color={props.color}
      align={props.align}
      sx={props.sx}
      display={props.display}
      type={props.type}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
