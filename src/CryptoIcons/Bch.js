import * as React from "react";

const SvgBch = ({ title, titleId, ...props }) => (
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
        id="bch_svg__a"
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
        id="bch_svg__d"
        width="121.7%"
        height="117.5%"
        x="-10.8%"
        y="-6.3%"
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
      <linearGradient id="bch_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bch_svg__b" cx={16} cy={15} r={15} />
      <path
        id="bch_svg__e"
        d="M21.207 9.534c.571 1.442.206 2.511-.642 3.301 1.747-.076 3.05.602 3.471 2.837.525 2.775-1.282 4.078-4.113 5.068l.814 2.84-1.713.492-.802-2.803c-.444.128-.9.255-1.372.38l.807 2.815-1.71.49-.817-2.845c-.401.112-.811.222-1.226.34l-2.228.64-.247-2.143s1.273-.343 1.245-.356c.485-.14.513-.525.481-.752l-1.287-4.49.18-.052c-.073.01-.136.027-.184.04l-.919-3.205c-.165-.328-.506-.666-1.2-.468.015-.029-1.243.358-1.243.358l-.525-1.829 2.362-.676.003.008c.355-.102.717-.213 1.085-.327l-.805-2.812 1.711-.491.79 2.757c.455-.14.913-.28 1.363-.41L13.7 5.502l1.712-.491.807 2.813c2.266-.44 4.212-.262 4.988 1.71zm-.65 6.77c-.637-2.217-4.18-.84-5.341-.507l1.08 3.77c1.16-.334 4.87-1.136 4.26-3.262zm-2.322-5.09c-.58-2.017-3.528-.84-4.494-.562l.98 3.42c.967-.278 4.068-.923 3.514-2.858z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bch_svg__a)" xlinkHref="#bch_svg__b" />
      <use fill="#8DC351" xlinkHref="#bch_svg__b" />
      <use
        fill="url(#bch_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bch_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bch_svg__d)" xlinkHref="#bch_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bch_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBch;
