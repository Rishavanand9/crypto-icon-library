import * as React from "react";

const SvgSafemoon = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="safemoon_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="safemoon_svg__a"
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
      <circle id="safemoon_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use
        fill="#000"
        filter="url(#safemoon_svg__a)"
        xlinkHref="#safemoon_svg__b"
      />
      <use fill="#00A79D" xlinkHref="#safemoon_svg__b" />
      <use
        fill="url(#safemoon_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#safemoon_svg__b"
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
        <path d="m15.344 17.15.155.757.285-.379.28 1.421.28-1.42.285.378.155-.757zm1.479-1.204v-2.132c0-.416-.753-1.468-.753-1.468s-.76 1.052-.76 1.468v2.132a2.45 2.45 0 0 0-1.227.889h3.962a2.45 2.45 0 0 0-1.222-.889zm8.373 2.166a1.12 1.12 0 0 0-1.123-1.118c-.62 0-1.123.5-1.123 1.118a1.12 1.12 0 0 0 1.123 1.117c.62 0 1.123-.5 1.123-1.117zm-1.78 0a.655.655 0 0 1 .404-.606.66.66 0 0 1 .718.141.652.652 0 0 1 .143.713.658.658 0 0 1-1.266-.248z" />
        <path d="M16.064 3C9.405 3.008 4.008 8.375 4 15c0 4.574 2.825 8.254 6.573 8.563 2.28.187 4.485-.621 5.937-1.334a9.113 9.113 0 0 0 2.392-1.44l.156-.129c.117-.101.226-.198.33-.297 1.361-1.282 2.982-3.59 2.982-7.3v-.41l-6.254-4.267-6.255 4.268v.407c0 3.712 1.62 6.018 2.981 7.3.159.15.326.298.5.439.57-.205 1.14-.416 1.695-.661-1.42-.918-3.479-2.902-3.615-6.676l4.694-3.204 4.693 3.204c-.11 3.05-1.49 4.923-2.697 5.981l-.15.115c-.037.028-3.66 2.762-7.26 2.464-2.252-.186-4.078-2.006-4.805-4.542a1.274 1.274 0 0 0-.339-2.253V15c0-1.469.312-2.922.917-4.261a3.054 3.054 0 0 0 3.77-1.247 3.02 3.02 0 0 0 .077-2.986 3.756 3.756 0 0 0-.11-.185 10.54 10.54 0 0 1 7.98-1.558 10.496 10.496 0 0 1 6.703 4.58c-.7.59-.957 1.553-.64 2.41a2.186 2.186 0 0 0 2.054 1.427h.101c.11.6.167 1.21.17 1.82 0 5.421-4.337 9.705-10.538 10.458-4.959.606-8.14-1.442-8.14-1.442C9.759 26.052 12.353 27 16.067 27 22.678 26.929 28 21.577 28 15c0-6.578-5.323-11.93-11.936-12zM5.951 16.614a.801.801 0 0 1-.185.364 9.18 9.18 0 0 1-.183-1.223.81.81 0 0 1 .368.86zM9.91 6.722a2.56 2.56 0 0 1-.357 2.924 2.593 2.593 0 0 1-2.883.671A10.54 10.54 0 0 1 9.83 6.59c.024.043.056.088.081.133H9.91zm16.399 5.994c-.71 0-1.348-.433-1.606-1.09a1.706 1.706 0 0 1 .44-1.884c.543.925.94 1.928 1.175 2.973h-.01z" />
      </g>
    </g>
  </svg>
);

export default SvgSafemoon;
