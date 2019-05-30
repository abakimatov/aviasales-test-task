import React from 'react'

export const Logo: React.FC = (): JSX.Element => (
  <svg
    width="82"
    height="88"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <circle id="b" cx="30.375" cy="37.875" r="22.125" />
      <filter
        x="-46.3%"
        y="-28.2%"
        width="192.7%"
        height="192.7%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="5.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.215686275 0 0 0 0 0.407843137 0 0 0 0 0.556862745 0 0 0 0.25 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <circle id="c" cx="30" cy="30" r="30" />
      <filter
        x="-28.3%"
        y="-26.7%"
        width="156.7%"
        height="156.7%"
        filterUnits="objectBoundingBox"
        id="d"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="5.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.215686275 0 0 0 0 0.407843137 0 0 0 0 0.556862745 0 0 0 0.3 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-56.7%"
        y="-55.7%"
        width="213.5%"
        height="211.3%"
        filterUnits="objectBoundingBox"
        id="f"
      >
        <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="5.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        d="M22.91 21.612v6.45c0 .255-.02.55-.055.861l3.698 2.927a.759.759 0 0 1 .17.962l-.09.149c-.19.316-.63.53-.992.492l-4.038-.423c-.486.972-1.19 2.015-1.974 2.015-.783 0-1.482-1.041-1.964-2.012l-4.006.42c-.36.038-.801-.176-.992-.492l-.09-.149a.759.759 0 0 1 .17-.962l3.679-2.912a7.716 7.716 0 0 1-.058-.876v-6.445l-13.694.699c-.354.018-.858-.156-1.136-.397l-.193-.168c-.273-.237-.49-.727-.484-1.085l.013-.836c.006-.362.263-.785.583-.95l14.91-7.654v-5.79c0-.897.321-2.271.766-3.066 0 0 .96-2.37 2.507-2.37 1.546 0 2.512 2.381 2.512 2.381.419.79.758 2.152.758 3.055v5.74l15.006 7.704c.32.165.577.588.583.95l.013.836c.006.358-.211.848-.484 1.085l-.194.168c-.277.241-.781.415-1.136.397l-13.788-.704z"
        id="g"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(11 9.14)">
        <use filter="url(#a)" xlinkHref="#b" fill="#000" />
        <mask id="e" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use fill="#000" filter="url(#d)" xlinkHref="#c" />
        <circle
          stroke="#42A5F5"
          strokeWidth="3.75"
          strokeLinejoin="round"
          fill="#2196F3"
          cx="30"
          cy="30"
          r="28.125"
        />
        <g mask="url(#e)" stroke="#42A5F5" strokeWidth="3.75">
          <path
            d="M2.714 22.875h53.822M2.714 38.625h53.822"
            strokeLinecap="square"
          />
          <path
            d="M29.25 4.5s-9.962 11.578-9.747 26.25C19.72 45.422 29.25 55.5 29.25 55.5M30 4.5s9.962 11.578 9.747 26.25C39.53 45.422 30 55.5 30 55.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <g transform="rotate(60 12.99 46.325)" filter="url(#f)">
        <mask id="h" fill="#fff">
          <use xlinkHref="#g" />
        </mask>
        <use fill="#FFF" xlinkHref="#g" />
        <path
          fill="#EBECF2"
          mask="url(#h)"
          d="M15.059 9.94h1.309v12.408h-1.309z"
        />
        <path
          d="M38.499 19.83c-.006-.362-.264-.785-.583-.95l-15.504-7.959v10.666l14.286.729c.355.018.859-.156 1.136-.397l.194-.168c.273-.237.49-.727.484-1.085l-.013-.836z"
          fill="#DEE1E3"
          mask="url(#h)"
        />
        <path
          d="M21.492 33.018c.415-.915.657-1.794.657-1.794.23-.65.415-1.616.501-2.463l3.903 3.089a.759.759 0 0 1 .17.962l-.09.149c-.19.316-.63.53-.992.492l-4.149-.435z"
          fill="#DEE1E3"
          opacity="0.4"
          mask="url(#h)"
        />
        <path
          d="M26.426 21.791l-3.746-.19V11.057l1.791.92 1.955 9.813z"
          fill="#C5C6CC"
          mask="url(#h)"
        />
        <path
          d="M22.91.679v34.4s-1.815-.034-3.281-.034l-.053-.001c.76-1.122 2.026-3.534 2.026-6.581V4.648c0-2.646-1.203-3.99-1.687-4.625 1.352.228 2.995.656 2.995.656z"
          fill="#DEE1E3"
          mask="url(#h)"
        />
      </g>
    </g>
  </svg>
)
