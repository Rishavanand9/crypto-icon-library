import * as React from "react";

const SvgCloak = ({ title, titleId, ...props }) => (
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
        id="cloak_svg__a"
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
        id="cloak_svg__d"
        width="115.9%"
        height="115.9%"
        x="-8%"
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
      <linearGradient id="cloak_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cloak_svg__b" cx={16} cy={15} r={15} />
      <path
        id="cloak_svg__e"
        d="M16.003 4C22.07 4.01 27.002 8.946 27 15.003 26.998 21.067 22.062 26 15.996 26h-.01C9.926 25.994 4.997 21.053 5 14.986 5.003 8.93 9.94 4 16.003 4zM16 5.418c-5.277 0-9.572 4.298-9.574 9.58-.001 5.276 4.288 9.572 9.562 9.576 5.283 0 9.585-4.296 9.589-9.576a9.504 9.504 0 0 0-2.805-6.77 9.512 9.512 0 0 0-6.77-2.81H16zm4.728 8.599c.339 1.719-.097 3.163-1.332 4.417l-.17.171-.216-.106a6.326 6.326 0 0 0-.364-.164l-.489-.204.394-.354c.769-.69 1.178-1.591 1.217-2.677.04-1.086-.345-2.033-1.143-2.814a3.725 3.725 0 0 0-2.621-1.066 3.764 3.764 0 0 0-2.83 1.279c-.798.91-1.103 2.018-.88 3.203a3.635 3.635 0 0 0 1.114 2.041l.387.359-.489.197c-.122.049-.25.102-.387.16l-.21.088-.16-.163c-.823-.848-1.269-1.824-1.362-2.984-.197-2.445 1.388-4.599 3.77-5.121a4.996 4.996 0 0 1 1.07-.118 4.798 4.798 0 0 1 4.7 3.856zm-10.755 6.29C8.497 18.661 7.3 15.741 8.37 12.483a8.032 8.032 0 0 1 7.625-5.519 8.028 8.028 0 0 1 7.605 5.429c.946 2.772.288 5.924-1.675 8.03l-.25.267-.897-1.002.198-.223c1.228-1.383 1.798-3.023 1.695-4.873-.096-1.69-.768-3.162-1.998-4.374a6.605 6.605 0 0 0-4.667-1.909 6.699 6.699 0 0 0-4.371 1.625 6.588 6.588 0 0 0-2.009 3.037 6.618 6.618 0 0 0-.12 3.626 6.592 6.592 0 0 0 1.43 2.77l.196.227-.916.986-.244-.273z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cloak_svg__a)" xlinkHref="#cloak_svg__b" />
      <use fill="#FF3A00" xlinkHref="#cloak_svg__b" />
      <use
        fill="url(#cloak_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#cloak_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use
          fill="#000"
          filter="url(#cloak_svg__d)"
          xlinkHref="#cloak_svg__e"
        />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#cloak_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgCloak;
