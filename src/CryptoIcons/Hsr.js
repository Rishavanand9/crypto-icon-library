import * as React from "react";

const SvgHsr = ({ title, titleId, ...props }) => (
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
        id="hsr_svg__a"
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
        id="hsr_svg__d"
        width="115.9%"
        height="120.6%"
        x="-8%"
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
      <linearGradient id="hsr_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="hsr_svg__b" cx={16} cy={15} r={15} />
      <path
        id="hsr_svg__e"
        d="M10.75 6.5h4.354c-.524.83-.845 1.747-.825 2.74 1.295.013 2.594.013 3.89 0 .017-.987-.248-1.93-.815-2.74h4.384c-.302.633-.815 1.22-.766 1.963-.02 3.324.007 6.65-.003 9.974.43 0 .865 0 1.3.003.317-.63.599-1.273.824-1.94 1.302.033 2.611-.037 3.907.137-1.282 1.106-1.952 2.68-2.787 4.113-3.314.007-6.627-.01-9.944.01-.156 1.21.59 2.043 1.454 2.74h-5.597c.487-.643 1.468-1.057 1.365-2 .033-3.213 0-6.43.01-9.647h2.84v1.98h3.768v-2.27h-7.867L8.287 15c.65 1.147 1.302 2.292 1.958 3.437h.968v2.313H8.254C7.174 18.83 6.054 16.933 5 15v-.003c1.057-1.93 2.18-3.827 3.254-5.747 1.104 0 2.207 0 3.31-.01a4.772 4.772 0 0 0-.815-2.74zm3.592 9.667v2.27h3.767v-2.27h-3.767zm6.915-6.917h2.95c.808 1.3 1.364 2.8 2.53 3.84.024.077.067.234.09.31-1.246.164-2.508.037-3.764.1-.16-.693-.474-1.33-.822-1.94l-.984.003V9.25zm-3.045 11.79c.871.003 1.746 0 2.618-.003-.02 1.113.759 1.803 1.524 2.463h-5.637c.723-.686 1.568-1.337 1.495-2.46z"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#hsr_svg__a)" xlinkHref="#hsr_svg__b" />
      <use fill="#56428E" fillRule="evenodd" xlinkHref="#hsr_svg__b" />
      <use
        fill="url(#hsr_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#hsr_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#hsr_svg__d)" xlinkHref="#hsr_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#hsr_svg__e" />
    </g>
  </svg>
);

export default SvgHsr;
