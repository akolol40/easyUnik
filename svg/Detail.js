import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Detail(props) {
    return (
        <Svg
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M20.375 21.375a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM20.375 11.75a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75zM20.375 31a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75z"
            fill="#fff"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )
}