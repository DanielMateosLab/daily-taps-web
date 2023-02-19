import { ToggleButton, ToggleButtonGroup } from "@aws-amplify/ui-react";
import { useContext } from "react";
import { colorModeContext } from "./AppThemeProvider";
import { MdDarkMode, MdLightMode, MdSettingsBrightness } from "react-icons/md";

const ColorModePicker = () => {
  const { colorMode, setColorMode } = useContext(colorModeContext);

  return (
    <ToggleButtonGroup
      value={colorMode}
      isExclusive
      // @ts-ignore
      onChange={setColorMode}
      size="small"
    >
      <ToggleButton value="light" title="light">
        <MdLightMode className="mr-2" /> Light
      </ToggleButton>
      <ToggleButton value="dark">
        <MdDarkMode className="mr-2" /> Dark
      </ToggleButton>
      <ToggleButton value="system">
        <MdSettingsBrightness className="mr-2" />
        System
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ColorModePicker;
