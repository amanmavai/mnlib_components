import * as React from "react";
export interface AtomProps {
  name: string;
  size: string;
  spin: number;
}

export function HelloAtom(props: AtomProps) {
  return <div className="tw-text-5xl">Hello Atom</div>;
}