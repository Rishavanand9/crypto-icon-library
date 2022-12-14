import * as React from "react";

const SvgDgb = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="dgb_svg__a"
        width="111.7%"
        height="111.7%"
        x="-5.8%"
        y="-4.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
        />
      </filter>
      <filter
        id="dgb_svg__d"
        width="119.4%"
        height="119.4%"
        x="-9.7%"
        y="-6.9%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="dgb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dgb_svg__b" cx={16} cy={15} r={15} />
      <path
        id="dgb_svg__e"
        d="m12.368 24 .479-1.282-.85.084-.306.81c-.024.061-.044.125-.075.183-.067.125-.17.203-.313.204-.63.001-1.258 0-1.888-.001-.015 0-.03-.009-.063-.019l.402-1.085c-.733-.02-1.446-.032-2.156-.113.012-.133 4.062-10.345 4.223-10.652.04-.003.087-.01.135-.01h3.27c.033 0 .066 0 .098.002.331.025.515.305.4.623-.153.42-.315.838-.472 1.256l-2.058 5.474c-.021.056-.039.114-.065.19.058.003.103.009.148.007 3.096-.135 5.368-1.613 6.836-4.39a6.711 6.711 0 0 0 .67-1.935c.073-.395.096-.791-.003-1.186a1.763 1.763 0 0 0-.698-1.03c-.468-.337-.994-.481-1.562-.484H7.5c.024-.06.035-.1.054-.136l1.388-2.501a.754.754 0 0 1 .706-.418h5.866l.601-1.59h1.782c.044 0 .088-.003.13.003.127.02.2.12.181.25-.008.054-.028.106-.048.158-.123.331-.249.661-.372.992-.021.056-.038.113-.06.18h.805c.02-.043.04-.087.058-.132l.496-1.317c.05-.133.052-.134.185-.134.564 0 1.129-.002 1.693 0 .238.001.323.127.238.357-.135.369-.274.735-.412 1.102-.019.051-.036.103-.06.173.055.01.1.02.145.026.785.096 1.549.274 2.274.601.551.249 1.052.574 1.464 1.03.558.615.835 1.35.879 2.18.042.805-.105 1.581-.372 2.33-.632 1.775-1.53 3.388-2.83 4.747-.896.936-1.93 1.68-3.064 2.282-1.224.65-2.518 1.105-3.858 1.427-.12.03-.183.082-.224.2-.147.41-.303.818-.457 1.226-.095.25-.19.318-.452.318h-1.868z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dgb_svg__a)" xlinkHref="#dgb_svg__b" />
      <use fill="#006AD2" xlinkHref="#dgb_svg__b" />
      <use
        fill="url(#dgb_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#dgb_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#dgb_svg__d)" xlinkHref="#dgb_svg__e" />
      <use fill="#FFF" xlinkHref="#dgb_svg__e" />
    </g>
  </svg>
);

export default SvgDgb;
