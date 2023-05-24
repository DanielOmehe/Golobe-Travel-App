import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.498 5.665A2.84 2.84 0 0 0 5.663 8.5a2.84 2.84 0 0 0 2.835 2.835A2.84 2.84 0 0 0 11.332 8.5a2.84 2.84 0 0 0-2.834-2.835ZM16.999 8.5c0-1.174.011-2.337-.055-3.509-.066-1.36-.376-2.568-1.371-3.564C14.575.43 13.368.122 12.008.056 10.835-.01 9.672 0 8.5 0 7.326 0 6.163-.01 4.991.056c-1.36.066-2.568.376-3.564 1.371C.43 2.425.122 3.63.056 4.991-.01 6.165 0 7.328 0 8.5c0 1.172-.011 2.337.055 3.509.066 1.36.376 2.568 1.371 3.563.998.998 2.203 1.306 3.564 1.372C6.165 17.01 7.328 17 8.5 17c1.174 0 2.337.011 3.509-.055 1.36-.066 2.568-.376 3.563-1.371.998-.998 1.306-2.204 1.372-3.564.068-1.172.055-2.335.055-3.509Zm-8.501 4.361A4.355 4.355 0 0 1 4.137 8.5a4.355 4.355 0 0 1 4.36-4.361A4.355 4.355 0 0 1 12.86 8.5a4.355 4.355 0 0 1-4.361 4.361Zm4.54-7.882a1.017 1.017 0 0 1-1.019-1.019c0-.563.455-1.019 1.019-1.019a1.017 1.017 0 1 1 0 2.038Z"
      fill="#121"
    />
  </svg>
)

export default SvgComponent