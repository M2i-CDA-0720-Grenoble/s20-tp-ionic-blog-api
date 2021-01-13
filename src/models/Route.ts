import { FC } from "react";

export default interface Route {
  uri: string,
  name: string,
  icon?: string,
  text?: string,
  displayTab: boolean,
  Component: FC<any>,
}
