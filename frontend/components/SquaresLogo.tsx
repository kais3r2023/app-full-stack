import React from 'react';
import { Path, Svg } from 'react-native-svg';

export default function SquaresLogo() {
  return (
    <Svg width={30} height={30} viewBox="0 0 256 256" fill="none">
      <Path
        d="M112,44H48a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V48A4,4,0,0,0,112,44Zm-4,64H52V52h56ZM208,44H144a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V48A4,4,0,0,0,208,44Zm-4,64H148V52h56Zm-92,32H48a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V144A4,4,0,0,0,112,140Zm-4,64H52V148h56Zm100-64H144a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V144A4,4,0,0,0,208,140Zm-4,64H148V148h56Z"
        fill="#000000"
      />
    </Svg>
  );
}
