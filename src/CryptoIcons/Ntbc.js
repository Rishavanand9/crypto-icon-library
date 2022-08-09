import * as React from "react";

const SvgNtbc = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ntbc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="ntbc_svg__a"
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
      <circle id="ntbc_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ntbc_svg__a)" xlinkHref="#ntbc_svg__b" />
      <use fill="#EEC315" xlinkHref="#ntbc_svg__b" />
      <use
        fill="url(#ntbc_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#ntbc_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M18.99 7.185a.684.684 0 0 0-.684-.685h-5.174l.008.01H8.147C7.513 6.51 7 7.024 7 7.658v14.684c0 .634.513 1.148 1.147 1.148h1.855c.634 0 1.147-.514 1.147-1.148V11.618c0-1.016 1.222-1.531 1.948-.821l3.975 3.886c.659.644 1.725.28 1.918-.55.02-.086.03-.176.03-.271l-.03-6.677z" />
        <path d="M23.965 6.51h-2.08c-.57 0-1.034.464-1.034 1.036v11.102c0 .917-1.103 1.382-1.758.74l-4.355-4.257c-.656-.64-1.758-.176-1.758.741v2.364c0 .036.002.072.005.108l-.005-.005v4.224c0 .518.419.937.936.937h5.74l-.014-.01h4.323c.572 0 1.035-.464 1.035-1.036V7.546c0-.572-.463-1.036-1.035-1.036z" />
      </g>
    </g>
  </svg>
);

export default SvgNtbc;
