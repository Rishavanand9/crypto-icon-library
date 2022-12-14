import * as React from "react";

const SvgBcd = ({ title, titleId, ...props }) => (
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
        id="bcd_svg__a"
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
        id="bcd_svg__d"
        width="117.5%"
        height="120.6%"
        x="-8.8%"
        y="-7.4%"
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
      <linearGradient id="bcd_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bcd_svg__b" cx={16} cy={15} r={15} />
      <path
        id="bcd_svg__e"
        d="m22.585 8.694.077.171-3.054 1.402 1.374 4.55 4.521-2.283.06.119.018-.022-2.929-3.906-.067-.031zm-.165-.077-2.773-1.29h-7.171l-2.962 1.36 3.08 1.296h6.85l2.976-1.366zm-13.154.32-2.773 3.601 4.514 2.28 1.38-4.568-3.12-1.313zm3.44 1.373-1.425 4.72 4.713 8.332 4.714-8.332-1.426-4.72h-6.576zm12.512 2.733L21 15.174l-4.205 7.433 8.424-9.564zm-10.047 9.524-4.182-7.393-4.196-2.119 8.378 9.512zm-8.74-9.924.033-.067-.043.056.01.011zm2.791-4.181L12.405 7h7.312l3.144 1.462L26 12.648 16 24 6 12.646l3.222-4.184zm9.201 5.372c.059.607-.192.972-.594 1.179.661.16 1.075.558.993 1.45-.1 1.106-.915 1.402-2.079 1.47v1.163h-.692v-1.147c-.18 0-.363-.002-.553-.006v1.153h-.691V17.93c-.162-.001-.327-.004-.495-.004h-.9l.137-.837s.512.008.503 0c.196 0 .248-.143.26-.232V15.02h.074a.55.55 0 0 0-.074-.005v-1.311c-.026-.143-.117-.307-.398-.308.009-.01-.502 0-.502 0v-.748h.954v.004c.144 0 .29-.003.44-.006v-1.151h.693v1.129c.184-.004.37-.008.552-.008v-1.12l.692-.001v1.151c.894.08 1.601.358 1.68 1.188zm-.968 2.49c0-.908-1.471-.771-1.94-.771v1.543c.469 0 1.94.098 1.94-.772zm-.322-2.177c0-.826-1.228-.7-1.618-.7v1.4c.39 0 1.618.092 1.618-.7z"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#bcd_svg__a)" xlinkHref="#bcd_svg__b" />
      <use fill="#FCC339" fillRule="evenodd" xlinkHref="#bcd_svg__b" />
      <use
        fill="url(#bcd_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bcd_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bcd_svg__d)" xlinkHref="#bcd_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#bcd_svg__e" />
    </g>
  </svg>
);

export default SvgBcd;
