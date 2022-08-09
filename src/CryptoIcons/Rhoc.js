import * as React from "react";

const SvgRhoc = ({ title, titleId, ...props }) => (
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
        id="rhoc_svg__a"
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
        id="rhoc_svg__d"
        width="115%"
        height="119.4%"
        x="-7.5%"
        y="-6.9%"
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
      <linearGradient id="rhoc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="rhoc_svg__b" cx={16} cy={15} r={15} />
      <path
        id="rhoc_svg__e"
        d="M11.816 8.24a11.174 11.174 0 0 1 5.753-2.2c.212-.043.442.091.435.325.02.56.006 1.12.006 1.68.014.174-.078.4-.278.405-1.846.204-3.6.958-5.124 2-.144.081-.112.268-.1.404.106.982.034 1.971.063 2.956 4.974.014 9.95-.002 14.926.008.237-.02.487.115.468.38.025 1.675.005 3.35.01 5.024.004.91-.19 1.852-.741 2.596-.87 1.169-2.4 1.87-3.854 1.612-1.03-.154-1.92-.793-2.544-1.604a11.207 11.207 0 0 1-5.844 2.215c-.215.003-.376-.208-.343-.414.007-.586-.012-1.174.01-1.76.05-.31.432-.25.659-.301 1.744-.272 3.412-1.003 4.836-2.04a37.333 37.333 0 0 1-.077-3.269c-4.992-.032-9.986-.002-14.978-.016-.22.025-.432-.14-.411-.373-.004-1.763-.003-3.527.002-5.29.01-.922.301-1.854.912-2.557.805-.916 2.019-1.501 3.251-1.429 1.18.047 2.263.718 2.963 1.648zM6.7 10.882c-.002 1.033-.003 2.067.002 3.102 1.234-.001 2.466.017 3.699-.01.002-1.008.015-2.015-.006-3.023-.019-.966-.892-1.82-1.862-1.8-.947-.039-1.81.79-1.833 1.73zm15.709 5.29c-.01.982-.002 1.965-.006 2.947-.006.393.113.777.34 1.097.474.677 1.418.973 2.19.674.713-.264 1.184-1.01 1.176-1.76 0-.986.005-1.97-.004-2.956-1.232-.01-2.464-.005-3.696-.003z"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#rhoc_svg__a)" xlinkHref="#rhoc_svg__b" />
      <use fill="#CC1E46" fillRule="evenodd" xlinkHref="#rhoc_svg__b" />
      <use
        fill="url(#rhoc_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#rhoc_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#rhoc_svg__d)" xlinkHref="#rhoc_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#rhoc_svg__e" />
    </g>
  </svg>
);

export default SvgRhoc;
