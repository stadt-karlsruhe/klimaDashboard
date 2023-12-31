import * as React from 'react'
import { SVGProps } from 'react'
function SvgBusCombustion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        stroke="#005b79"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      >
        <path d="M112.876 88.207h10.159a4.076 4.076 0 0 0 4.064-4.064V31.314a4.077 4.077 0 0 0-4.063-4.064H13.314a4.076 4.076 0 0 0-4.064 4.064v52.829a4.076 4.076 0 0 0 4.064 4.064h10.159M43.13 87.895h49.76" />
        <path d="M113.104 87.895c0 5.153-4.525 9.33-10.107 9.33-5.582 0-10.107-4.177-10.107-9.33 0-5.153 4.525-9.33 10.107-9.33 5.582 0 10.107 4.177 10.107 9.33ZM43.13 87.895a9.33 9.33 0 0 1-9.33 9.33 9.33 9.33 0 0 1-9.33-9.33 9.33 9.33 0 0 1 9.33-9.33 9.33 9.33 0 0 1 9.33 9.33ZM9.25 39.421h107.69a2.034 2.034 0 0 1 2.032 2.032v14.223a2.034 2.034 0 0 1-2.032 2.032H9.25M78.895 40.623v17.105M99.11 40.623v17.105M58.68 40.623v17.105M36.91 40.623v17.105M173.71 71.98h3.767a12.244 12.244 0 1 0 0-24.489c-.188 0-.367.019-.546.028a13.183 13.183 0 0 0-25.826 3.739c.002.758.071 1.515.207 2.261a9.4 9.4 0 0 0-4.907 14.693" />
        <path d="M135.091 71.981h29.2a8.477 8.477 0 1 0-5.994-14.471M135.091 75.748h19.779a6.592 6.592 0 0 1 3.296 12.303 6.592 6.592 0 0 1-7.958-1.048" />
      </g>
    </svg>
  )
}
export default SvgBusCombustion
