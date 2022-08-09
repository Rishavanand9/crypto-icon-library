import * as React from "react";

const SvgDth = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dth_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="dth_svg__a"
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
      <circle id="dth_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#dth_svg__a)" xlinkHref="#dth_svg__b" />
        <use fill="#3C80F1" xlinkHref="#dth_svg__b" />
        <use
          fill="url(#dth_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#dth_svg__b"
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
        <path d="M16.076 4a8.926 8.926 0 0 0-8.92 8.915c.005.48.06.959.16 1.429a.138.138 0 0 0 .218.082 2.012 2.012 0 0 1 1.168-.376.137.137 0 0 0 .138-.161 5.382 5.382 0 0 1-.091-.965 7.326 7.326 0 1 1 14.652 0c0 4.04-5.17 9.203-7.02 11.025a.436.436 0 0 1-.61 0 54.694 54.694 0 0 1-2.28-2.362h-.037a7.763 7.763 0 0 1-2.065-.495l-.122-.05a.137.137 0 0 0-.16.214 51.75 51.75 0 0 0 3.641 3.921 1.898 1.898 0 0 0 2.65 0c3.258-3.219 7.597-7.98 7.597-12.262A8.926 8.926 0 0 0 16.075 4" />
        <path d="M19.783 13.816c0 .126-.01.25-.02.372a4.325 4.325 0 0 1-.322 1.363 4.651 4.651 0 0 1-.768 1.184l.01.008a6.323 6.323 0 0 1-2.25 1.607 5.594 5.594 0 0 1-2.704.434 5.001 5.001 0 0 1-2.436-.924c.231-.008.461-.043.684-.104.202-.056.395-.14.574-.246a2.059 2.059 0 0 0 .857-1.005c.078-.191.132-.391.16-.596.018-.172.023-.345.016-.518V9.504a.34.34 0 0 1 .29-.275h1.928a3.73 3.73 0 0 1 1.318.354 4.8 4.8 0 0 1 2.073 1.883c.12.202.223.413.31.63.084.217.15.44.198.669.048.226.076.456.082.688v.364zm1.588-.419a5.416 5.416 0 0 0-.116-.964 5.858 5.858 0 0 0-.699-1.78 6.384 6.384 0 0 0-2.769-2.513 5.32 5.32 0 0 0-1.875-.498c-.082 0-.161 0-.251-.01h-1.798c-.058 0-.118 0-.176.013-.235.028-.464.1-.673.21a1.929 1.929 0 0 0-1.016 1.57v5.967c0 .104-.007.208-.02.311a.903.903 0 0 1-.052.206.511.511 0 0 1-.082.137.607.607 0 0 1-.309.178 1.58 1.58 0 0 1-.543.042 3.015 3.015 0 0 1-1.747-.781.796.796 0 0 0-1.239.964 8.346 8.346 0 0 0 2.263 2.63 6.71 6.71 0 0 0 1.562.869c.56.218 1.146.359 1.744.418a7.184 7.184 0 0 0 3.476-.544 7.417 7.417 0 0 0 2.824-2.058l.01.008a6.236 6.236 0 0 0 1.025-1.596 5.916 5.916 0 0 0 .437-1.858c.013-.16.02-.306.026-.458v-.227c.006-.066.001-.157 0-.236h-.002z" />
      </g>
    </g>
  </svg>
);

export default SvgDth;