import * as React from "react";

const SvgGlxt = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="glxt_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="glxt_svg__a"
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
      <circle id="glxt_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#glxt_svg__a)" xlinkHref="#glxt_svg__b" />
        <use fill="#005396" fillRule="evenodd" xlinkHref="#glxt_svg__b" />
        <use
          fill="url(#glxt_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#glxt_svg__b"
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
      <path
        d="M12.634 4.549c.952-.3 1.943-.489 2.943-.52 1.372-.063 2.752.16 4.049.602 2.1.74 3.968 2.129 5.265 3.938.303.402.558.837.803 1.277.286.557.543 1.131.737 1.725.258.818.449 1.663.509 2.52.031.186.011.375.037.56.009.232.006.463 0 .698-.026.185-.006.374-.037.56a10.686 10.686 0 0 1-.434 2.277 10.872 10.872 0 0 1-.715 1.78 11.029 11.029 0 0 1-4.96 4.891c-.597.292-1.22.54-1.862.709-1.078.308-2.2.44-3.318.408-.185-.025-.377-.005-.56-.037-.837-.057-1.66-.24-2.46-.488a11.03 11.03 0 0 1-6.982-6.783c-.358-1.04-.586-2.129-.615-3.232-.037-.528.003-1.06.046-1.588.08-.78.257-1.552.497-2.297a11.037 11.037 0 0 1 3.992-5.44c.402-.303.837-.56 1.277-.803a11.194 11.194 0 0 1 1.788-.757zm2.117 3.968v2.569c-.005.045.038.071.06.103.395.414.792.825 1.186 1.24a892.44 892.44 0 0 1 0-3.912c-.414 0-.831-.003-1.246 0zM9.334 9.846c.095.063.163.154.243.231.849.857 1.7 1.712 2.546 2.574.774.783 1.551 1.563 2.323 2.346-.935.957-1.886 1.897-2.817 2.854-.746.752-1.492 1.503-2.235 2.255a1.095 1.095 0 0 1-.06.045c1.097 0 2.197.003 3.297-.005 1.123-1.175 2.252-2.346 3.372-3.523l3.371 3.523c1.097.008 2.195.003 3.292.005-.169-.134-.3-.302-.457-.448-.786-.794-1.578-1.589-2.36-2.386-.76-.774-1.535-1.537-2.289-2.317.183-.183.354-.374.543-.554 1.437-1.449 2.868-2.903 4.306-4.352.085-.083.157-.18.257-.248-1.1 0-2.197-.003-3.295.003-1.122 1.174-2.248 2.345-3.371 3.52-1.12-1.178-2.249-2.349-3.371-3.52-1.098-.003-2.198-.003-3.295-.003zm6.672 7.714c0 1.309.003 2.614-.003 3.923.417-.003.834 0 1.248 0V18.91a.085.085 0 0 0-.028-.074c-.212-.228-.434-.443-.643-.671-.189-.206-.391-.395-.574-.606z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgGlxt;
