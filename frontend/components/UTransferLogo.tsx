import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface UTransferLogoProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
}

export default function UTransferLogo({
  width = 100,
  height = 100,
  style,
}: UTransferLogoProps) {
  return (
    <Svg
      viewBox="0 0 511.48 553.43"
      width={width} // ajusta el tamaño según necesites
      height={height}
    >
      <Path
        fill="#fea409"
        d="M498.92,400.45v-226.76c0-35.24-22.85-66.41-56.45-77.01L178.05,13.21v111.41h0
        c33.34,10.52,56,41.45,56,76.41v193.68c-.39,4.15-.64,8.34-.64,12.59
        0,73.41,59.51,132.92,132.92,132.92s132.92-59.51,132.92-132.92
        c0-2.31-.23-4.56-.35-6.84Z"
      />
      <Path
        fill="#00bcb3"
        d="M211.61,510.14l-143.84-72.58c-34.08-17.19-55.57-52.11-55.57-90.28V81.1
        l138.39,59.8c37.03,16,61.01,52.48,61.01,92.83v276.42Z"
      />
    </Svg>
  );
}
