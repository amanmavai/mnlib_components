import React from "react";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {cn} from "@/utils";

type NavItem = {
  name: string;
  to: string;
};

export function MenuSheet({navItems, LinkComponent}: {navItems: NavItem[]; LinkComponent: any}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="tw-h-6 tw-w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="tw-w-80 tw-rounded-r-md tw-px-0">
        <SheetHeader className="tw-h-8">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-p-4">
          {navItems.map((item) => (
            <NavItem
              LinkComponent={LinkComponent}
              key={item.to}
              to={item.to}
              text={item.name}
              onClick={() => setOpen(false)}
            ></NavItem>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

type NavItemProps = {
  to: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  LinkComponent: any;
};
function NavItem({LinkComponent, to, text, onClick}: NavItemProps) {
  return (
    <LinkComponent
      onClick={onClick}
      to={to}
      className={({isActive}: {isActive: boolean}) =>
        cn(
          isActive ? "tw-font-semibold tw-text-gray-800" : "tw-font-normal tw-text-gray-600",
          "tw-rounded-lg tw-p-1 tw-px-3 tw-transition-all hover:tw-bg-gray-200",
        )
      }
    >
      <span>{text}</span>
    </LinkComponent>
  );
}
