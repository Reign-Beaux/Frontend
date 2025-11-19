import type { Routes } from "@Infrastructure/Router/Routes";
import { Link as LinkRRD, type LinkProps as LinkRRDProps } from "react-router-dom";

interface LinkProps extends Omit<LinkRRDProps, "to"> {
  route: Routes;
}

export const Link = ({ route, ...rest }: LinkProps) => (
  <LinkRRD to={route} {...rest} />
);
