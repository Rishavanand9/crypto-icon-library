import * as React from "react";

const SvgNlg = ({ title, titleId, ...props }) => (
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
        id="nlg_svg__a"
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
        id="nlg_svg__d"
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
      <linearGradient id="nlg_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nlg_svg__b" cx={16} cy={15} r={15} />
      <path
        id="nlg_svg__e"
        d="M25.515 13.804c.165-.002.27.02.336.08.07.064.098.168.113.331.466 5.379-3.602 10.241-8.998 10.74-5.564.515-10.394-3.5-10.922-9.08C5.53 10.456 9.599 5.54 15.03 5.046c3.076-.28 5.732.686 7.968 2.816.023.022.018.114-.008.14a119.48 119.48 0 0 1-1.52 1.521c-.029.028-.133.024-.165-.005-2.307-2.114-4.98-2.74-7.903-1.675C10.446 8.92 8.755 11.15 8.42 14.29c-.45 4.249 2.757 7.994 7.035 8.317 3.878.292 7.392-2.453 8.035-6.285.006-.038-.08-.133-.124-.133-2.395-.007-4.79-.005-7.184-.014-.062 0-.177-.115-.179-.178a53.477 53.477 0 0 1 0-2.008c.001-.06.108-.168.167-.169 1.596-.009 7.826.005 9.344-.017z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nlg_svg__a)" xlinkHref="#nlg_svg__b" />
      <use fill="#2AB0FD" xlinkHref="#nlg_svg__b" />
      <use
        fill="url(#nlg_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#nlg_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#nlg_svg__d)" xlinkHref="#nlg_svg__e" />
      <use fill="#FFF" xlinkHref="#nlg_svg__e" />
    </g>
  </svg>
);

export default SvgNlg;
