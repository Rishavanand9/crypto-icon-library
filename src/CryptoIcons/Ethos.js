import * as React from "react";

const SvgEthos = ({ title, titleId, ...props }) => (
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
        id="ethos_svg__a"
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
        id="ethos_svg__d"
        width="117.5%"
        height="116.7%"
        x="-8.8%"
        y="-6%"
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
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="ethos_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ethos_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#ethos_svg__a)" xlinkHref="#ethos_svg__b" />
      <use fill="#00FFBA" fillRule="evenodd" xlinkHref="#ethos_svg__b" />
      <use
        fill="url(#ethos_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#ethos_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#ethos_svg__d)" transform="translate(6 5)">
        <path d="M4.871 4.904a1.707 1.707 0 0 0-.194 2.148 1.693 1.693 0 0 0 1.42.756 2.188 2.188 0 0 1-.001 4.377A6.086 6.086 0 0 1 1.819 1.767 6.084 6.084 0 0 1 10 1.425a6.085 6.085 0 0 0-2.182 4.673 2.188 2.188 0 0 0 2.175 2.189 2.188 2.188 0 0 1-2.188-2.189 1.69 1.69 0 0 0-.29-.955 1.727 1.727 0 0 0-.754-.622 1.723 1.723 0 0 0-1.33 0 1.714 1.714 0 0 0-.56.383zm14.64 6.628a6.094 6.094 0 0 1-1.242 6.613 6.084 6.084 0 0 1-10.45-4.243 2.188 2.188 0 1 1 4.375 0 1.7 1.7 0 0 0 1.045 1.577c.43.18.913.178 1.341-.005a1.721 1.721 0 0 0 .905-.918 1.717 1.717 0 0 0-.916-2.23 1.694 1.694 0 0 0-.665-.134 2.188 2.188 0 0 1 0-4.377 6.081 6.081 0 0 1 5.606 3.717z" />
        <path
          d="M9.994 11.714c1.208 0 2.188.98 2.188 2.188a6.085 6.085 0 0 1-10.467 4.226A6.087 6.087 0 0 1 6.096 7.815a2.188 2.188 0 0 1 0 4.377c-.34-.001-.672.1-.954.29a1.726 1.726 0 0 0-.622.755 1.71 1.71 0 0 0 .346 1.852v.002a1.706 1.706 0 0 0 2.184.23 1.7 1.7 0 0 0 .755-1.42c0-1.207.98-2.187 2.189-2.187zm9.326-8.396a6.09 6.09 0 0 1-5.417 8.868 2.189 2.189 0 0 1 0-4.378 1.71 1.71 0 0 0 1.577-1.045 1.721 1.721 0 0 0-.054-1.444 1.705 1.705 0 0 0-2.477-.64 1.698 1.698 0 0 0-.756 1.42 2.188 2.188 0 1 1-4.375-.001 6.085 6.085 0 0 1 9.717-4.886l.004.003a6.103 6.103 0 0 1 1.78 2.103z"
          opacity={0.7}
        />
      </g>
    </g>
  </svg>
);

export default SvgEthos;
