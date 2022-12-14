import * as React from "react";

const SvgXmo = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xmo_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="xmo_svg__a"
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
      <circle id="xmo_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#xmo_svg__a)" xlinkHref="#xmo_svg__b" />
        <use fill="#F60" fillRule="evenodd" xlinkHref="#xmo_svg__b" />
        <use
          fill="url(#xmo_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#xmo_svg__b"
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
        <path d="M27 15c0 6.076-4.924 11-11 11S5 21.076 5 15c0-2.458.808-4.727 2.166-6.557l1.796 1.796A8.453 8.453 0 0 0 7.5 15c0 4.684 3.807 8.49 8.49 8.49 4.684 0 8.491-3.806 8.491-8.49a8.5 8.5 0 0 0-1.46-4.76l1.795-1.797A10.872 10.872 0 0 1 27 15" />
        <path d="M22.084 15A6.09 6.09 0 0 1 16 21.084 6.09 6.09 0 0 1 9.916 15a6.09 6.09 0 0 1 .799-3.016L16 17.269l5.285-5.285c.524.92.8 1.959.8 3.016" />
        <path d="M23.193 6.681 16 13.866 10.517 8.39l-1.71-1.71A10.915 10.915 0 0 1 16 4c2.75 0 5.26 1.005 7.193 2.681" />
      </g>
    </g>
  </svg>
);

export default SvgXmo;
