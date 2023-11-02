import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function CloseBurgerIcon(props: Props) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.854 2.854a.5.5 0 00-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 10-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 00.708.708L7.5 8.207l4.646 4.647a.5.5 0 00.708-.708L8.207 7.5l4.647-4.646z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default CloseBurgerIcon;