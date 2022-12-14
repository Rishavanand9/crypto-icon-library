import * as React from "react";

const SvgTrtl = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="trtl_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="trtl_svg__a"
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
      <circle id="trtl_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#trtl_svg__a)" xlinkHref="#trtl_svg__b" />
        <use fill="#00843D" xlinkHref="#trtl_svg__b" />
        <use
          fill="url(#trtl_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#trtl_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={15}
          cy={15}
          r={14.5}
        />
      </g>
      <g fill="#FFF">
        <path d="M16.005 5.454c.359 0 .71.094 1.02.273l6.51 3.758a2.041 2.041 0 0 1 1.02 1.768v7.668c0 .729-.39 1.403-1.02 1.767l-6.51 3.76a2.041 2.041 0 0 1-2.042 0l-6.51-3.76a2.041 2.041 0 0 1-1.02-1.767v-7.667c0-.73.389-1.404 1.02-1.768l6.51-3.759a2.04 2.04 0 0 1 1.02-.273h.002zm-.001-1.419c-.607 0-1.204.16-1.73.464l-6.51 3.758a3.47 3.47 0 0 0-1.73 2.997v7.667a3.47 3.47 0 0 0 1.73 2.996l6.51 3.759a3.46 3.46 0 0 0 3.46 0l6.51-3.759a3.47 3.47 0 0 0 1.73-2.996v-7.667a3.47 3.47 0 0 0-1.73-2.997l-6.51-3.759a3.464 3.464 0 0 0-1.73-.463z" />
        <path d="M15.206 16.29a.426.426 0 0 1-.368-.212l-.784-1.357a.426.426 0 0 1 0-.426l.784-1.357a.426.426 0 0 1 .368-.212h1.598c.152 0 .293.08.369.212l.783 1.357a.426.426 0 0 1 0 .426l-.783 1.357a.426.426 0 0 1-.369.213h-1.598zm-2.135-2.136a.426.426 0 0 0 .369-.213l.783-1.357a.426.426 0 0 0 0-.426l-.977-1.692-1.906 1.04a.426.426 0 0 0-.221.383c.016.762.104 1.52.265 2.265h1.687zm5.868 0a.426.426 0 0 1-.368-.213l-.784-1.357a.426.426 0 0 1 0-.426l.977-1.692 1.906 1.04c.14.076.225.224.221.383-.016.762-.104 1.52-.264 2.265h-1.688zM16.21 9.071a.426.426 0 0 0-.409 0l-1.932 1.055.969 1.678a.426.426 0 0 0 .368.213h1.599a.426.426 0 0 0 .368-.213l.969-1.678-1.933-1.055zm-4.65 5.792a11.884 11.884 0 0 0 1.723 3.624l.94-1.629a.426.426 0 0 0 0-.425l-.783-1.357a.426.426 0 0 0-.368-.213H11.56zm8.89 0a11.884 11.884 0 0 1-1.724 3.624l-.94-1.629a.426.426 0 0 1 0-.425l.784-1.357a.426.426 0 0 1 .368-.213h1.511zM15.206 17a.426.426 0 0 0-.368.213l-1.09 1.89c.586.73 1.257 1.389 1.997 1.963a.426.426 0 0 0 .522 0 12.009 12.009 0 0 0 1.998-1.963l-1.091-1.89a.426.426 0 0 0-.369-.213h-1.599z" />
      </g>
    </g>
  </svg>
);

export default SvgTrtl;
