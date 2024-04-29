import * as React from "react";
import {Check, ChevronsUpDown} from "lucide-react";

import {cn} from "@/utils";
import {Button} from "@/components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export type ListItem = {
  id: string;
  label: React.ReactNode;
  value: string;
};
export interface ComboboxProps {
  items: ListItem[];
}
export function Combobox({items}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="tw-w-[200px] tw-justify-between">
          {value ? items.find((item) => item.value === value)?.label : "Select framework..."}
          <ChevronsUpDown className="tw-ml-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-[200px] tw-p-0">
        <Command>
          <CommandInput placeholder="Search item..." className="tw-h-9" />
          <CommandEmpty>No Item found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {item.label}
                <Check
                  className={cn("tw-ml-auto tw-h-4 tw-w-4", value === item.value ? "tw-opacity-100" : "tw-opacity-0")}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
