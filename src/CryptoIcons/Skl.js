import * as React from "react";

const SvgSkl = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="skl_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="skl_svg__a"
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
      <circle id="skl_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#skl_svg__a)" xlinkHref="#skl_svg__b" />
      <use fill="#000" xlinkHref="#skl_svg__b" />
      <use
        fill="url(#skl_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#skl_svg__b"
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
        <path d="M22.514 7.492v.991H9.81v13.034h12.704V23.5l-7.42-.057-7.45-.085-.086-8.443L7.5 6.5h15.014z" />
        <path d="M23.698 9.9c1.126.312 2.108 1.19 2.425 2.182.173.595.087.651-.924.651-.78 0-1.212-.17-1.472-.566-.433-.709-2.397-.794-2.974-.114-.635.765.058 1.332 2.31 1.842 1.126.255 2.31.68 2.627.963 1.444 1.275.866 4.08-1.01 4.845-1.27.51-3.35.51-4.62 0-.866-.368-1.877-1.643-1.877-2.436 0-.51 1.877-.312 2.368.283 1.04 1.162 3.464.992 3.638-.255.144-.963-.405-1.388-2.05-1.587-2.685-.368-3.667-1.19-3.667-3.06 0-2.21 2.425-3.513 5.226-2.748z" />
      </g>
    </g>
  </svg>
);

export default SvgSkl;
