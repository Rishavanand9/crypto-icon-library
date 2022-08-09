import * as React from "react";

const SvgCrpt = ({ title, titleId, ...props }) => (
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
        id="crpt_svg__a"
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
        id="crpt_svg__d"
        width="118.4%"
        height="115.9%"
        x="-9.2%"
        y="-5.7%"
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
      <linearGradient id="crpt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="crpt_svg__b" cx={16} cy={15} r={15} />
      <path
        id="crpt_svg__e"
        d="M21.833 8.744a7.764 7.764 0 0 0-5.058-1.847c-4.195 0-7.65 3.317-7.938 7.557h-.822c.288-4.744 4.113-8.397 8.76-8.397 2.057 0 4.03.756 5.634 2.1l-.576.587zm-.288 2.771a5.863 5.863 0 0 0-4.77-2.477c-3.249 0-5.881 2.687-5.881 5.962 0 3.316 2.632 6.004 5.88 6.004 1.886 0 3.659-.92 4.771-2.478l.577.588c-1.276 1.721-3.25 2.73-5.347 2.73-3.702 0-6.704-3.066-6.704-6.844 0-3.736 3.002-6.802 6.704-6.802a6.655 6.655 0 0 1 5.347 2.73l-.577.587zm.946-2.141.577-.588c.205.21.37.42.534.63l-.576.587a7.357 7.357 0 0 0-.535-.63zm-5.757 14.61c-4.647 0-8.472-3.652-8.76-8.396h.822c.288 4.24 3.743 7.557 7.938 7.557 1.85 0 3.62-.63 5.058-1.847l.576.587a8.688 8.688 0 0 1-5.634 2.1zm5.757-3.316c.206-.21.37-.42.535-.63l.576.587c-.165.21-.329.42-.534.63l-.577-.587zM6.823 15c0 5.584 4.482 10.16 9.952 10.16 2.961 0 5.757-1.301 7.65-3.694l.575.587C22.944 24.573 19.983 26 16.775 26 10.812 26 6 21.045 6 15 6 8.912 10.853 4 16.775 4 19.94 4 22.945 5.427 25 7.947l-.576.588c-1.892-2.351-4.688-3.695-7.65-3.695-5.47 0-9.951 4.576-9.951 10.16z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#crpt_svg__a)" xlinkHref="#crpt_svg__b" />
      <use fill="#00BDCD" xlinkHref="#crpt_svg__b" />
      <use
        fill="url(#crpt_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#crpt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#crpt_svg__d)" xlinkHref="#crpt_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#crpt_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCrpt;
