import {Label} from "@/components/ui/label";
import {Switch as SwitchPrimitive} from "@/components/ui/switch";

export function Switch() {
  return (
    <div className="tw-flex tw-items-center tw-space-x-2">
      <SwitchPrimitive id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
