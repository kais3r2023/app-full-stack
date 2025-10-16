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
    <Svg width={width} height={height} viewBox="0 0 100 100" style={style}>
      {/* Forma izquierda (verde-azul) */}
      <Path d="M20,20 Q40,10 40,50 Q40,90 20,80 Z" fill="#00B4AA" />
      {/* Forma derecha (naranja) */}
      <Path d="M40,10 Q80,10 80,50 Q80,90 40,90 Z" fill="#FFA500" />
    </Svg>
  );
}
