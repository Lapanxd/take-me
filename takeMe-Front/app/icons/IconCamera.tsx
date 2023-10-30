import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
    color: string
    size: number
  }

function IconCamera(props: Props) {
  return (
    <Svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width={props.size} height={props.size}
    >
      <Path d="M864 260H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm-96-160a96 96 0 10192 0 96 96 0 10-192 0z" />
    </Svg>
  );
}

export default IconCamera;