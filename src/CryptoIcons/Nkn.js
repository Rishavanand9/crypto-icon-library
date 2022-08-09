import * as React from "react";

const SvgNkn = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nkn_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="nkn_svg__a"
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
      <circle id="nkn_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nkn_svg__a)" xlinkHref="#nkn_svg__b" />
      <use fill="#23336F" xlinkHref="#nkn_svg__b" />
      <use
        fill="url(#nkn_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#nkn_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <path
        d="M16.485 18.46s2.913.717 5.22-1.096c2.307-1.812 2.235-4.545 2.235-4.545s-2.61-.813-4.982.916c-2.371 1.728-2.473 4.725-2.473 4.725zm-.009 1.367s.476 2.05 2.341 2.92c1.865.87 3.554-.041 3.554-.041s-.317-1.892-2.153-2.83c-1.836-.936-3.742-.049-3.742-.049zm4.389-.887s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026c-1.47.049-2.361 1.265-2.361 1.265zm-1.473-7.067s-1.552-2.566-4.466-2.916c-2.913-.35-4.794 1.634-4.794 1.634s1.271 2.42 4.17 2.875c2.899.455 5.09-1.593 5.09-1.593zm.973-.96s1.114-1.785.41-3.72C20.07 5.26 18.23 4.71 18.23 4.71s-1.11 1.563-.475 3.522c.634 1.96 2.609 2.682 2.609 2.682zm-3.73-2.475s.079-1.504-1.032-2.472C14.492 5 13.15 5.292 13.15 5.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776zM14.022 15.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm-.962-.974s-1.787-1.114-3.72-.41c-1.933.705-2.484 2.543-2.484 2.543s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm-2.474 3.731s-1.504-.08-2.47 1.031c-.968 1.112-.677 2.453-.677 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.776-2.564z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgNkn;