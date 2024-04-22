import {clsx} from "clsx";
import styles from "./styles.module.css";

export interface HelloAtomProps {
  name: string;
  size: string;
  spin: number;
  className?: string;
}

export function HelloAtom(props: HelloAtomProps) {
  return (
    <div className={clsx(styles.wrapper, props.className)}>
      <h1>Hello Atom</h1>
      <div>{props.name}</div>
      <div>{props.size}</div>
      <div>{props.spin}</div>
    </div>
  );
}
