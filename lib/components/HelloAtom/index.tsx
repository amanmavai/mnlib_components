import {cn} from "../../utils";
import styles from "./styles.module.css";

export interface HelloAtomProps {
  name: string;
  size: string;
  spin: number;
  className?: string;
}

export function HelloAtom(props: HelloAtomProps) {
  return (
    <div className={cn(styles.wrapper, props.className)}>
      <h1>Hello Atom</h1>
      <div className="tw-text-3xl tw-text-cyan-500">{props.name}</div>
      <div>{props.size}</div>
      <div>{props.spin}</div>
    </div>
  );
}
