import * as React from "react"
import Svg, { Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 19.03 19.04"
      {...props}
    >
      <Image
        width={17}
        height={1}
        transform="scale(.01)"
        xlinkHref="Banking.png"
      />
    </Svg>
  )
}

export default SvgComponent