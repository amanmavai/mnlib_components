import {Label} from "@/components/ui/label";
import {Switch as SwitchPrimitive} from "@/components/ui/switch";

export function Switch() {
  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitive id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
