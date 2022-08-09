import * as React from "react";

const SvgLeo = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="leo_svg__a"
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
      <filter id="leo_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-19.7%"
        y="-17%"
        width="139.5%"
        height="134.1%"
        filterUnits="objectBoundingBox"
        id="leo_svg__e"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="leo_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="leo_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#leo_svg__a)" xlinkHref="#leo_svg__b" />
      <use fill="#11021E" xlinkHref="#leo_svg__b" />
      <use
        fill="url(#leo_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#leo_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#leo_svg__d)">
        <g
          filter="url(#leo_svg__e)"
          transform="translate(6.5 4.25)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <path d="M4.429 9.116h.01l.153.058.163.057.153.058.163.067.153.058.163.047.154.058.153.067.307.115.163.048.153.067.163.058.154.057.163.058.153.057.163.058.153.057.163.058.154.067.163.048V8.1H4.208l-.153.077-.364.192-.374.191-.364.192-.365.192-.374.192-.373.191-.365.192-.364.192-.374.191-.364.192-.336.182L0 15.77l.374.259.364.259.374.249.729.518.373.258.163.125.211-.259.365-.48.028-.047-.028-.029-.365-.259-.374-.268-.373-.259-.365-.259-.364-.258-.105-.068.028-4.438.077-.038.364-.182.365-.192.373-.173.374-.191.365-.183.364-.182.374-.182.364-.182z" />
          <path d="m10.775 19.603-.317.125-.345.134-.345.144-.345.134-.153.067-.182-.095-.346-.173-.335-.173-.345-.172-.345-.173-.345-.172-.345-.173-.346-.182-.345-.163-.335-.182-.345-.173-.336-.162-.345-.183-.038-.019v-4.476H3.94v5.09l1.38.69.336.172.345.183.335.163.345.182.346.172.345.163.345.182.69.345.335.173.48.24.201-.087.345-.134.345-.134.345-.144.345-.144.346-.124-.346-.863zm6.125-6.24.02 2.118-.096.068-.585.412-.575.422-.585.412-.585.422-.594.402-.575.422-.585.422-.345.249-.24-.192-.575-.44-.585-.451-.585-.441-.575-.45-.105-.068v-2.28l.105-.096.575-.614.585-.604.585-.613.575-.604.566-.594H5.752l.584.613.576.604.594.604.585.613.575.604.076.087v2.76l.509.393.584.441.575.451.585.44.585.451.575.441.22.173.365-.268.585-.413.575-.421.594-.413.585-.412.585-.412.575-.422.585-.412.584-.412.48-.355.095-2.598-.575-.019zM.949 8.464h.067l.01-2.818.383-.24.46-.277.47-.278.45-.298.47-.278.46-.287.46-.278.46-.278.46-.288.47-.278.01-.01.441.26.47.258.92.537.46.259.47.259.45.268.451.25.02-.039.46-.824-.46-.269-.47-.259-.451-.258-.47-.26-.46-.277-.46-.259-.46-.259-.47-.259-.45-.259-.02-.01-.45.27-.46.287-.46.278-.46.287-.46.278-.47.278-.451.288-.47.278-.46.288-.46.287-.46.278-.45.278-.02 3.365h.47z" />
          <path d="m18.97 5.876-.23-.182-.248-.201-.24-.192-.24-.192-.24-.2-.24-.183-.248-.192-.24-.201-.25-.192-.172-.144-.067.077-.24.297-.249.307-.057.086.057.067.25.202.24.191.239.211.249.202.24.2.249.212.24.201.115.096.01 4.534-.125.077-.24.163-.25.144-.239.163-.25.143-.239.163-.24.144-.249.163-.24.144-.24.163-.239.144-.24.163-.249.143-.24.163-.239.144-.24.163-.249.144.25.383.24.393.047.067.192-.124.24-.154.249-.143.24-.154.239-.153.24-.153.24-.144.248-.154.24-.143.24-.154.249-.153.24-.154.249-.143.24-.154.24-.143.239-.154.24-.153.249-.154.24-.143zM11.072 8.58v1.965l.077-.03.316-.133.326-.125.316-.134.326-.125.326-.134.316-.134.326-.125.326-.134.317-.125.325-.134.317-.124V3.144l-.364-.22-.374-.211-.365-.22-.373-.221-.374-.211-.374-.22-.364-.221-.365-.21-.374-.221-.373-.22-.374-.212-.365-.22-.364-.22L9.51.104 9.318 0l-.182.086-.374.211-.365.192-.364.201-.374.211-.374.192-.373.201.373.22.374.211.23.135.144-.067.364-.202.365-.191.374-.192.153-.077.22.125.374.22.729.422.747.441.374.21.729.442.374.21.747.442.115.057v4.381h-2.617" />
          <path d="m11.072 10.545 3.614-1.457-3.624-1.007m-3.316 2.464V8.119l-3.308.988 3.308 1.428" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgLeo;