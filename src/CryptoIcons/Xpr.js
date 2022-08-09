import * as React from "react";

const SvgXpr = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xpr_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="xpr_svg__a"
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
      <circle id="xpr_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xpr_svg__a)" xlinkHref="#xpr_svg__b" />
      <use fill="#7543E3" xlinkHref="#xpr_svg__b" />
      <use
        fill="url(#xpr_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#xpr_svg__b"
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
        d="M11.896 11.56c-.036.305-.07.626-.092.947-.536.386-1.037.78-1.502 1.174-.24.204-.472.408-.69.62-1.721-1.816-2.455-3.449-1.982-4.287.416-.744 1.812-.955 3.772-.554.078-.35.155-.685.247-1.006-2.376-.496-4.188-.168-4.872 1.05a2.14 2.14 0 0 0-.275 1.071v.037c.014 1.727 1.657 4.038 4.4 6.218.281.226.585.452.895.678a23.18 23.18 0 0 0 .402 2.849c-2.376.635-4.104.475-4.576-.364-.416-.743.106-2.106 1.417-3.659l-.684-.744c-1.622 1.896-2.27 3.696-1.586 4.92.48.861 1.516 1.27 2.912 1.27 1.403 0 3.165-.416 5.097-1.225a24.81 24.81 0 0 0 1.177-.532L16 20c.614.291 1.22.554 1.82.78.26.102.521.19.775.277-.656 2.449-1.657 3.921-2.595 3.921-.832 0-1.713-1.151-2.355-3.12a13.18 13.18 0 0 1-.959.307C13.461 24.542 14.638 26 16 26c1.981 0 3.56-3.076 4.104-7.56.035-.305.063-.626.091-.94.557-.4 1.08-.816 1.566-1.239a17.288 17.288 0 0 0 .62-.561c1.728 1.808 2.46 3.448 1.988 4.286-.387.693-1.664.926-3.412.627l-.353-.066a18.44 18.44 0 0 1-.246.992c.148.029.296.058.437.08a9.28 9.28 0 0 0 1.544.146c1.417 0 2.425-.43 2.89-1.261.621-1.108.17-2.72-1.276-4.527-.747-.94-1.72-1.888-2.848-2.792-.29-.233-.592-.46-.895-.685a21.685 21.685 0 0 0-.254-2.027c-.05-.284-.099-.561-.155-.83.401-.11.79-.198 1.163-.263 1.749-.3 3.025-.066 3.413.627.408.729-.092 2.063-1.361 3.586.246.248.472.496.684.736a4.96 4.96 0 0 0 .253-.313c1.439-1.808 1.897-3.419 1.277-4.527-.62-1.108-2.193-1.509-4.428-1.123-1.037.175-2.172.518-3.35.985-.049.021-.091.036-.14.058-.395.16-.79.335-1.185.525-.035.014-.07.036-.106.05a23.782 23.782 0 0 0-1.826-.794c-.26-.102-.522-.19-.775-.277C14.074 6.471 15.076 5 16.013 5c.832 0 1.72 1.159 2.362 3.127.325-.11.642-.211.96-.306C18.536 5.465 17.36 4 15.991 4c-1.974 0-3.56 3.076-4.096 7.56zm6.303-.372c-.014-.015-.035-.022-.05-.03-.33-.196-.67-.386-.993-.568a.424.424 0 0 1 .084-.037c.402-.175.804-.335 1.192-.473.134-.052.268-.095.395-.139.056.27.105.54.155.824.056.328.098.663.14 1.006a40.064 40.064 0 0 0-.923-.583zm-5.196-.387c.049-.299.098-.583.162-.86a20.654 20.654 0 0 1 1.678.649c-.332.182-.67.372-1.001.568a.147.147 0 0 0-.043.03c-.317.19-.627.386-.93.583.042-.336.084-.656.134-.97zm1.332 7.173a15.83 15.83 0 0 1-.698-.43 21.7 21.7 0 0 1-.895-.598 28.544 28.544 0 0 1-.064-1.939c0-.35.007-.692.021-1.028.014-.313.029-.612.05-.91.5-.35 1.03-.693 1.586-1.029.212-.13.43-.255.642-.371.338-.19.677-.365 1.015-.54a25.2 25.2 0 0 1 1.657.911c.24.146.472.285.698.43.31.197.606.394.896.598a28.78 28.78 0 0 1 .042 2.967c-.014.306-.028.612-.05.911-.5.35-1.029.693-1.586 1.028-.148.088-.289.175-.437.255-.374.219-.747.416-1.114.605-.035.015-.07.037-.106.051a26.663 26.663 0 0 1-1.657-.91zm-3.483-2.5c-.183-.153-.352-.314-.522-.467.233-.211.473-.43.727-.641.211-.175.43-.357.662-.532-.014.291-.02.59-.02.889v.284c0 .401.006.788.02 1.174a15.148 15.148 0 0 1-.867-.707zm9.441-.175v-.292c0-.4-.007-.787-.021-1.173a16.985 16.985 0 0 1 1.382 1.174c-.183.167-.374.342-.571.51-.028.021-.057.05-.085.072-.232.197-.48.401-.733.598.014-.291.028-.59.028-.89zm-7.283 3.95a21.513 21.513 0 0 1-.141-1.005c.303.197.606.386.923.576.014.014.036.022.05.029.331.197.662.386 1 .568 0 0-.006 0-.006.008a29.53 29.53 0 0 1-1.037.423c-.049.021-.098.036-.148.058-.162.058-.324.117-.486.168a19.95 19.95 0 0 1-.155-.824zm5.027.54a28.727 28.727 0 0 1-.896-.364l.127-.066c.29-.16.578-.328.875-.496a65.935 65.935 0 0 0 .973-.612c-.043.328-.085.656-.134.962-.05.3-.106.584-.163.868-.253-.095-.514-.19-.782-.292zm-3.314-4.782c0-.721.571-1.312 1.27-1.312.697 0 1.268.59 1.268 1.312 0 .722-.57 1.312-1.269 1.312-.698 0-1.269-.59-1.269-1.312z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgXpr;
