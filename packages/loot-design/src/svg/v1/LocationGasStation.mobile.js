import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgLocationGasStation = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 0 1 2 2v3a1 1 0 0 0 2 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 0 1-6 0v-3h-1v-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgLocationGasStation;