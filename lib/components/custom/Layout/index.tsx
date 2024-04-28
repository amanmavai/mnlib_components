import {MenuSheet} from "../menu_sheet";

type menuItem = {
  name: string;
  to: string;
};
interface HeaderProps {
  navItems: menuItem[];
  LinkComponent: any;
  title?: string;
}
export function Header({navItems, LinkComponent, title}: HeaderProps) {
  return (
    <header className="tw-flex tw-items-center tw-border-b tw-border-b-gray-200 tw-px-4">
      <MenuSheet navItems={navItems} LinkComponent={LinkComponent} />;
      <div className="tw-flex tw-flex-1 tw-items-center tw-justify-end tw-text-lg tw-text-primary">{title}</div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="tw-flex tw-items-center tw-justify-center tw-border-t tw-border-t-gray-200 tw-text-sm tw-font-light tw-tracking-widest">
      Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
    </footer>
  );
}
