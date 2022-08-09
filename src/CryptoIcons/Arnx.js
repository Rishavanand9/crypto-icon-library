import * as React from "react";

const SvgArnx = ({ title, titleId, ...props }) => (
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
        id="arnx_svg__a"
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
      <filter id="arnx_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-17%"
        y="-17%"
        width="134.1%"
        height="134.1%"
        filterUnits="objectBoundingBox"
        id="arnx_svg__e"
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
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="arnx_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="arnx_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#arnx_svg__a)" xlinkHref="#arnx_svg__b" />
      <use fill="#436697" xlinkHref="#arnx_svg__b" />
      <use
        fill="url(#arnx_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#arnx_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#arnx_svg__d)">
        <g filter="url(#arnx_svg__e)" transform="translate(5 4)">
          <path
            d="M14.075 15.716a.26.26 0 0 1-.136-.046.283.283 0 0 1-.09-.09h-.009l-2.218 3.895c2.254-.495 4.5-1 6.753-1.496a2.313 2.313 0 0 1-.144-.199c-.063-.09-.117-.198-.18-.315a5.431 5.431 0 0 1-.162-.325v-.009c0-.009-.01-.018-.01-.018a10.714 10.714 0 0 1-.297-.694c-.027-.063-.045-.117-.072-.171a23.698 23.698 0 0 1-.388-1.028c-.379.072-.694.135-.91.18-.01 0-.019 0-.028.009-.333.072-.649.135-.955.19-.172.035-.334.053-.487.08-.036.01-.081.01-.135.019 0 0-.109.018-.253.027a1.26 1.26 0 0 1-.28-.01zm2.073-3.445a5.16 5.16 0 0 1-.117-.523l-1.695 2.976.01-.01c.071-.026.152-.053.252-.08.234-.073.522-.145.874-.235s.767-.19 1.253-.315c-.099-.298-.207-.604-.306-.92a12.043 12.043 0 0 1-.27-.893zm2.615-5.274h-.036l-2.19 3.85c.008 0 .026.009.053.009.01 0 .01 0 .018.009.01 0 .01 0 .018.009.01 0 .01.009.018.009.01 0 .01 0 .018.009a.296.296 0 0 1 .072.054c.036.036.064.072.073.081.009.01.009.018.018.027a.793.793 0 0 1 .054.09c.045.081.072.126.072.126.108.208.216.451.324.74.109.288.226.595.334.92.027.072.045.135.072.207.063.19.144.424.235.694.378-.072.739-.144 1.09-.207.352-.063.668-.108.956-.135.289-.028.532-.046.74-.037.117 0 .207.01.288.028.018 0 .045.009.063.009-.171-.478-.351-1.01-.559-1.578l-1.73-4.914zm2.065 7.294a9.522 9.522 0 0 1-.758.243c-.054.018-.108.027-.153.046-.045.009-.09.027-.135.036a5.63 5.63 0 0 1-.379.09 3.78 3.78 0 0 1-.216.054h-.01c-.216.054-.504.117-.838.19.072.252.163.531.27.847.1.315.2.622.28.91.027.09.045.172.072.262.046.135.082.27.109.433.009.027.009.054.018.08.036.145.045.253.036.334 0 0 .378-.072.568-.117a10.969 10.969 0 0 0 1.722-3.2c-.054-.163-.108-.316-.162-.479-.082.109-.217.19-.424.271zM8.971.316h.036c.036 0 .082.018.136.054.027.018.063.036.09.063a.953.953 0 0 1 .108.09c.162.144.343.316.55.523.198.198.406.415.622.65.207.224.397.432.568.603.081-.081.162-.171.244-.27.099-.109.198-.217.297-.334.1-.108.198-.225.307-.325.099-.108.198-.207.297-.306L12.37.92c.055-.054.109-.1.154-.145.09-.08.171-.153.252-.216.172-.144.298-.207.397-.207.036 0 .072.009.108.018l-.099-.118-.262-.054c-.009 0-.018 0-.027-.009-.08-.018-.162-.027-.243-.036h-.018c-.081-.009-.171-.027-.252-.036h-.01c-.45-.054-.91-.09-1.379-.09h-.253c-.08 0-.153.01-.225.01h-.027c-.081 0-.153.008-.234.017h-.01c-.414.027-.82.081-1.217.153-.036.036-.063.073-.099.118.018 0 .027-.01.045-.01zm-6.185 5.13c.045-.036.1-.09.19-.126a.898.898 0 0 1 .333-.081c.153-.01.27.036.334.054C5.076 3.679 6.51 2.073 7.943.46l-.351.108c-.803.27-1.867.721-2.976 1.515a11.395 11.395 0 0 0-2.524 2.524c-.072.109-.153.208-.226.316.307.171.614.352.92.523zm-.234 1.073a.835.835 0 0 1-.1-.397V6.06s.01-.045.01-.063l-.93-.523a10.904 10.904 0 0 0-1.496 5.103v.758c.027.847.144 1.668.352 2.452.802-2.326 1.614-4.643 2.416-6.97a.906.906 0 0 1-.252-.297zM13.498.884a.672.672 0 0 1-.09.18 3.78 3.78 0 0 1-.199.325c-.045.063-.09.135-.135.207a9.503 9.503 0 0 1-.37.505c-.063.072-.117.153-.18.234-.01.01-.018.027-.027.036-.117.145-.244.298-.379.451-.1.117-.19.226-.298.343.136.153.289.315.442.496.054.054.108.117.154.18.108.117.207.234.306.352l.289.342c.18.226.333.424.46.604.108.163.162.28.18.37v.036c0 .09-.045.18-.126.262h4.31a.848.848 0 0 1 .108-.199l-4.41-4.95v.018a.52.52 0 0 1-.035.208zm2.587.396c-.018-.009-.027-.018-.045-.018a4.68 4.68 0 0 0-.37-.18.145.145 0 0 1-.063-.036 14.088 14.088 0 0 0-.36-.162c-.027-.01-.045-.018-.072-.027a5.173 5.173 0 0 0-.397-.154c-.018-.009-.036-.009-.054-.018-.135-.054-.28-.099-.424-.144 1.398 1.569 2.795 3.147 4.202 4.716.018 0 .045-.01.063-.01h.189c.045.01.126.019.226.055.009 0 .018.009.027.018.009.009.027.009.036.018a.988.988 0 0 1 .189.126c.009 0 .009.009.018.009.027.018.045.045.063.063.298-.171.595-.334.884-.505a11.117 11.117 0 0 0-3.715-3.525h-.009c-.126-.081-.262-.154-.388-.226zm-3.381 4.4c-.045-.036-.081-.072-.126-.108l-.28-.252-.144-.145a8.05 8.05 0 0 1-.46-.486c-.108-.118-.207-.235-.306-.343-.1-.117-.208-.226-.307-.334-.333.343-.613.64-.847.893-.054.054-.109.117-.163.171l-.018.018c-.108.108-.198.208-.288.298l-.126.126a3.952 3.952 0 0 1-.343.298h3.561c-.009-.01-.027-.018-.036-.027-.036-.046-.08-.073-.117-.109zm-8.547.127H8.61c-.018-.018-.036-.046-.054-.064-.018-.018-.027-.045-.037-.063-.018-.045-.036-.09-.036-.135 0-.027.01-.063.018-.108 0-.01.01-.018.01-.027.008-.018.018-.045.036-.072.027-.054.063-.118.108-.18.009-.01.009-.019.018-.019a12.153 12.153 0 0 1 .874-1.09 3.59 3.59 0 0 1 .18-.199c.064-.063.118-.135.181-.198.135-.154.27-.307.388-.451.009-.01.018-.018.018-.027A39.364 39.364 0 0 1 9.35 2.01c-.09-.118-.171-.235-.252-.343a6.483 6.483 0 0 1-.37-.586L8.674.974c-.018-.036-.027-.072-.045-.1C8.61.812 8.593.758 8.593.713L4.12 5.725c.01.027.028.055.037.082zm7.249 16.148a10.93 10.93 0 0 0 7.574-3.444c-2.525.559-5.05 1.118-7.574 1.668v1.776zm10.441-9.341c.009-.036.009-.063.018-.1.009-.09.027-.17.036-.26v-.01l.027-.28c0-.026.009-.053.009-.08 0-.054.009-.1.009-.154.018-.28.027-.54.027-.784a10.968 10.968 0 0 0-1.1-4.734l-.027-.054c-.036-.081-.081-.153-.117-.234l-.054-.108c-.045-.082-.09-.172-.136-.253-.333.19-.658.37-.991.56 0 .026 0 .053-.01.08-.008.054-.018.1-.027.145-.009.027-.018.045-.027.072a.933.933 0 0 1-.099.189c-.018.018-.027.036-.045.054.785 2.263 1.569 4.517 2.353 6.78.046-.189.082-.387.118-.577 0-.018.009-.036.009-.063a3.08 3.08 0 0 0 .027-.19z"
            fill="#FFF"
            fillRule="nonzero"
          />
          <path d="M11.045 19.214 3.958 6.744l7.087 12.47 7.06-12.416-7.06 12.416z" />
          <path
            d="M17.843 6.438a.867.867 0 0 0 .262.36l-7.06 12.416-7.087-12.47a.997.997 0 0 0 .199-.306zm-7.132 8.142c-.124 0-.225.1-.225.225v.004c0 .11.069.197.165.222l.06.008a.223.223 0 0 0 .226-.23v-.004a.225.225 0 0 0-.226-.225zM8.81 12.36a.225.225 0 0 0-.209.141l-.008.024-.008.06c0 .127.099.226.225.226s.225-.099.225-.225-.099-.226-.225-.226zm3.616-4.436c-.451-.167-.718.015-.834.136l-.009.01a.387.387 0 0 0-.068.089c0 .009-.01.018 0 .018 0 .009.009.009.018.018.802.397 1.407.703 1.668.838l.027.018c.027.018.108.055.117.118.011.053-.023.107-.068.155l-.039.038-.046.041-.04.034c-.103.086-.241.198-.997.787a.324.324 0 0 1-.108.072.293.293 0 0 1-.126.036h-.027c-.045 0-.082 0-.235-.063a.443.443 0 0 0-.207-.027l-.09.027c-.018.009-.027.018-.045.027a.322.322 0 0 1-.026.022l.017-.013a.402.402 0 0 0-.064.054c-.009.009-.009.018-.009.027.014 0 .023 0 .03.004l.003.008.013.006c.018 0 .027 0 .045.009a.13.13 0 0 1 .063.018 1.028 1.028 0 0 1 .21.116l-.048-.035a.955.955 0 0 1 .108.09.955.955 0 0 1 .09.108l.082.118.072.099a.521.521 0 0 1 .045.126.686.686 0 0 1 .027.19v.108c0 .009 0 .018.009.027l.004.002.005.007h.027c.027-.018.054-.027.072-.045.009-.018.027-.027.036-.036a.14.14 0 0 0 .054-.073c.036-.08.036-.162.036-.207-.018-.171 0-.207.018-.243 0-.01.01-.018.01-.027a.324.324 0 0 1 .071-.109.955.955 0 0 1 .109-.09 22.98 22.98 0 0 1 1.029-.7l.062-.04c.08-.044.198-.125.28-.08a.121.121 0 0 1 .029.024c.024.039.036.094.042.12l.01.045c.053.316.162.965.297 1.83 0 .01.009.018.009.018.001.006.003.01.009.01.009.008.009.008.018.008s.523-.117.487-.793l-.072-1.614v-.04a.543.543 0 0 1 .225-.429l.487-.387s.297-.208.243-.532c-.009-.01-.009-.018-.018-.018l.007.004c-.007-.011-.011-.014-.016-.014-.297-.153-.577.073-.577.073l-.523.351a.512.512 0 0 1-.514.072l-.487-.17zm-4.058.541a.226.226 0 0 0-.225.226v.004c0 .11.069.196.165.222l.06.008a.223.223 0 0 0 .226-.23v-.004a.226.226 0 0 0-.226-.226zm1.704-1.127a.226.226 0 0 0-.225.226v.004c0 .11.069.196.165.222l.06.008a.223.223 0 0 0 .226-.23v-.004a.226.226 0 0 0-.226-.226zm-4.12 0a.226.226 0 0 0-.226.226l.001.004c0 .11.068.196.164.222l.06.008a.223.223 0 0 0 .226-.23v-.004c0-.125-.1-.226-.225-.226zM3.03 17.492c.036-.172.08-.352.135-.56l.054-.216c.081-.288.171-.595.28-.91.026-.081.053-.154.071-.226.046-.144.09-.288.136-.423a1.51 1.51 0 0 1 .063-.19c-.244-.054-.532-.126-.839-.19a18.805 18.805 0 0 1-.901-.225c-.217-.063-.415-.117-.586-.18-.063-.018-.118-.045-.172-.063a1.985 1.985 0 0 1-.189-.081.89.89 0 0 1-.135-.081c-.081.225-.154.45-.235.676.388 1.037.92 1.993 1.587 2.858.235.054.46.1.694.153a1.3 1.3 0 0 1 .037-.342zM1.172 13.48c.072-.01.144-.019.235-.019.207 0 .45.01.73.037.288.027.604.072.947.135.351.063.712.126 1.082.207.099-.28.198-.577.306-.901a20.2 20.2 0 0 1 .496-1.308 6.19 6.19 0 0 1 .162-.342c.036-.082.072-.145.109-.199a.88.88 0 0 1 .099-.126.274.274 0 0 1 .063-.045.254.254 0 0 1 .135-.036L3.4 7.069l-2.227 6.41zm5.671 2.127c-.072-.018-.153-.027-.225-.045a11.365 11.365 0 0 1-.478-.099l-.243-.054c-.334-.072-.64-.135-.929-.19-.063.181-.126.352-.198.533a8.394 8.394 0 0 1-.199.505c-.063.162-.126.315-.189.468a9.247 9.247 0 0 1-.19.415 6.66 6.66 0 0 1-.351.65.857.857 0 0 1-.135.189l6.744 1.487-2.245-3.85-.036.036a.189.189 0 0 1-.054.037c-.081.045-.235.054-.47.036a8.8 8.8 0 0 1-.576-.082c-.081-.009-.153-.027-.226-.036zm-.847-3.615c-.018.09-.045.19-.072.297l-.054.217c-.063.216-.127.442-.208.676a9.465 9.465 0 0 0-.153.469c-.054.153-.1.306-.153.45.243.064.478.118.685.172.108.027.207.054.307.072.099.027.189.045.279.072.045.01.09.018.126.036l.127.027c.08.018.153.036.225.063.144.037.28.073.388.109.108.027.198.063.28.09L6.058 11.73a1.855 1.855 0 0 0-.063.262zm-1.091 8.124c.18.117.37.234.577.351.559.325 1.091.568 1.569.758.135.054.27.108.424.162a11 11 0 0 0 3.282.577v-1.776c-2.597-.568-5.185-1.145-7.782-1.713a11.984 11.984 0 0 0 1.93 1.64z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgArnx;
