import * as React from "react";

const SvgPirl = ({ title, titleId, ...props }) => (
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
        id="pirl_svg__a"
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
        id="pirl_svg__d"
        width="117.5%"
        height="117.5%"
        x="-8.8%"
        y="-6.2%"
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
      <linearGradient id="pirl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="pirl_svg__b" cx={16} cy={15} r={15} />
      <path
        id="pirl_svg__e"
        d="M11.594 15.105c.086.258.213.5.377.718l-2.493-2.518a1.399 1.399 0 0 1 0-1.97l3.145-3.147c.065-.048.127-.1.187-.154l.091-.08 2.547-2.549a1.376 1.376 0 0 1 1.953.003l8.343 8.403a1.408 1.408 0 0 1-.151 1.801 1.423 1.423 0 0 1-1.78.195l-7.37-7.44-.008-.01-.024-.026-3.943 3.944-.06.05a.286.286 0 0 1-.007.008l3.896 3.927a1.4 1.4 0 0 1 .358 1.346 1.39 1.39 0 0 1-.978.986 1.377 1.377 0 0 1-1.337-.361l-1.996-2.01c-.029-.026-.058-.06-.094-.096l-.092-.092a2.586 2.586 0 0 1-.187-.237l.045.053-.03-.039a2.531 2.531 0 0 1-.392-.705zm8.146 2.573-3.901-3.929a1.399 1.399 0 0 1 0-1.97 1.378 1.378 0 0 1 1.956.004l1.997 2.01c.028.025.057.06.094.095l.091.092c.052.058.1.12.144.183l.022.027a4.957 4.957 0 0 0-.086-.119l2.61 2.627a1.4 1.4 0 0 1 0 1.972l-3.147 3.148a2.362 2.362 0 0 0-.19.151l-2.624 2.624a1.376 1.376 0 0 1-1.954 0l-8.477-8.547a1.408 1.408 0 0 1 .185-1.876 1.383 1.383 0 0 1 1.872.01l7.384 7.455.025.03 3.935-3.934.058-.047a.352.352 0 0 1 .006-.006z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#pirl_svg__a)" xlinkHref="#pirl_svg__b" />
      <use fill="#96B73D" xlinkHref="#pirl_svg__b" />
      <use
        fill="url(#pirl_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#pirl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#pirl_svg__d)" xlinkHref="#pirl_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#pirl_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgPirl;
