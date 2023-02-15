import { ToggleButton, ToggleButtonGroup } from "@aws-amplify/ui-react";
import { useContext } from "react";
import { colorModeContext } from "./AppThemeProvider";

const ColorModePicker = () => {
  const { colorMode, setColorMode } = useContext(colorModeContext);

  return (
    <ToggleButtonGroup
      className="fixed top-0 right-0"
      value={colorMode}
      isExclusive
      // @ts-ignore
      onChange={setColorMode}
    >
      <ToggleButton value="light">Light</ToggleButton>
      <ToggleButton value="dark">Dark</ToggleButton>
      <ToggleButton value="system">System</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ColorModePicker;
