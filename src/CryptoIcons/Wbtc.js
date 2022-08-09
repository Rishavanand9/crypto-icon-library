import * as React from "react";

const SvgWbtc = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="wbtc_svg__a"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter id="wbtc_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-17%"
        y="-17%"
        width="134.1%"
        height="134.1%"
        filterUnits="objectBoundingBox"
        id="wbtc_svg__e"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="wbtc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="wbtc_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#wbtc_svg__a)" xlinkHref="#wbtc_svg__b" />
      <use fill="#201A2D" xlinkHref="#wbtc_svg__b" />
      <use
        fill="url(#wbtc_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#wbtc_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#wbtc_svg__d)">
        <g
          filter="url(#wbtc_svg__e)"
          transform="translate(5 4)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <path d="m17.818 4.586-.6.6a8.494 8.494 0 0 1 0 11.464l.6.6a9.352 9.352 0 0 0 0-12.678v.014zM5.2 4.638a8.494 8.494 0 0 1 11.464 0l.6-.6a9.352 9.352 0 0 0-12.678 0l.614.6zm-.562 12.018a8.494 8.494 0 0 1 0-11.458l-.6-.6a9.352 9.352 0 0 0 0 12.678l.6-.62zm12.018.554a8.494 8.494 0 0 1-11.464 0l-.6.6a9.352 9.352 0 0 0 12.678 0l-.614-.6zm-1.942-8.286c-.12-1.252-1.2-1.672-2.566-1.8V5.4h-1.056v1.692h-.844V5.4H9.2v1.736H7.058v1.13s.78-.014.768 0a.546.546 0 0 1 .6.464v4.752a.37.37 0 0 1-.128.258.366.366 0 0 1-.272.092c.014.012-.768 0-.768 0l-.2 1.262H9.18v1.764h1.056V15.12h.844v1.73h1.058v-1.744c1.784-.108 3.028-.548 3.184-2.218.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778zm-1.48 3.756c0 1.312-2.248 1.162-2.964 1.162v-2.328c.716.002 2.964-.204 2.964 1.166zm-.49-3.28c0 1.2-1.876 1.054-2.472 1.054V8.338c.596 0 2.472-.188 2.472 1.062z" />
          <path d="M10.924 21.852C4.89 21.851 0 16.959 0 10.925 0 4.892 4.892 0 10.925 0c6.034 0 10.926 4.89 10.927 10.924a10.926 10.926 0 0 1-10.928 10.928zm0-21C5.365.856.862 5.365.864 10.924c.002 5.559 4.51 10.064 10.068 10.064 5.559 0 10.066-4.505 10.068-10.064A10.068 10.068 0 0 0 10.924.852z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgWbtc;
