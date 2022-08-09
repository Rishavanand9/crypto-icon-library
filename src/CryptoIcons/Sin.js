import * as React from "react";

const SvgSin = ({ title, titleId, ...props }) => (
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
        id="sin_svg__a"
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
      <filter id="sin_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-18.8%"
        y="-18.8%"
        width="137.5%"
        height="137.5%"
        filterUnits="objectBoundingBox"
        id="sin_svg__e"
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
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sin_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="sin_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#sin_svg__a)" xlinkHref="#sin_svg__b" />
      <use fill="#F5342E" xlinkHref="#sin_svg__b" />
      <use
        fill="url(#sin_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#sin_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#sin_svg__d)">
        <g
          filter="url(#sin_svg__e)"
          transform="translate(6 5)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <path d="M.001 10.124a10.195 10.195 0 0 1 .507-3.281 9.995 9.995 0 0 1 1.815-3.287 9.788 9.788 0 0 1 3.37-2.63A9.454 9.454 0 0 1 8.425.104a9.46 9.46 0 0 1 1.72-.096 9.62 9.62 0 0 1 3.306.716c.016.007.035.014.037.034.002.026-.021.034-.04.042l-.36.14a22.43 22.43 0 0 0-2.296 1.044c-.827.437-1.621.927-2.358 1.512-.64.509-1.225 1.075-1.7 1.753-.32.456-.572.946-.71 1.493-.176.692-.133 1.377.067 2.056.147.502.368.972.612 1.43.308.58.657 1.135.978 1.707.292.52.564 1.05.744 1.625.125.401.2.812.192 1.234a3.516 3.516 0 0 1-.412 1.567c-.303.584-.718 1.076-1.18 1.53-.427.419-.891.788-1.37 1.14-.07.052-.125.05-.198.012a9.824 9.824 0 0 1-1.945-1.301 9.974 9.974 0 0 1-1.867-2.131 10.172 10.172 0 0 1-1.574-4.338 8.418 8.418 0 0 1-.07-1.148z" />
          <path d="M6.047 19.241c.018-.043.063-.044.097-.056a25.73 25.73 0 0 0 2.06-.856c.79-.372 1.559-.784 2.287-1.265a11.678 11.678 0 0 0 1.6-1.25c.488-.46.92-.964 1.256-1.544.272-.47.456-.971.516-1.512a3.812 3.812 0 0 0-.137-1.463c-.15-.529-.385-1.022-.649-1.503-.316-.577-.675-1.13-1.006-1.698-.281-.483-.543-.975-.733-1.502a3.8 3.8 0 0 1-.238-1.588c.027-.37.123-.726.272-1.068.224-.514.547-.963.922-1.377.548-.607 1.185-1.11 1.849-1.584.073-.053.134-.059.215-.018.706.354 1.366.776 1.975 1.277.623.513 1.177 1.09 1.66 1.733A9.886 9.886 0 0 1 19.964 9.2c.022.315.042.63.033.946a10.24 10.24 0 0 1-.432 2.713 10.025 10.025 0 0 1-2.773 4.425 10.194 10.194 0 0 1-5.14 2.56 10.422 10.422 0 0 1-2.052.154 10.244 10.244 0 0 1-3.456-.695c-.036-.016-.078-.02-.098-.06z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgSin;