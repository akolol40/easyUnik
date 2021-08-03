import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function AddBtn(props) {
    return (
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G
            filter="url(#prefix__filter0_d)"
            stroke="#17C6C6"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <Path d="M5 8h14M12 1v14" />
          </G>
          <Defs></Defs>
        </Svg>
      )
    }
