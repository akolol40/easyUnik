import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Editor(props) {
    return (
        <Svg
          width={21}
          height={21}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M9.105 2.91H2.801A1.801 1.801 0 001 4.712V17.32a1.801 1.801 0 001.801 1.801H15.41a1.801 1.801 0 001.8-1.801v-6.304"
            stroke="#5B5B5B"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M15.86 1.56a1.91 1.91 0 012.702 2.701l-8.556 8.556-3.602.9.9-3.602L15.86 1.56z"
            stroke="#5B5B5B"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )
}