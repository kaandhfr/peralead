import React from "react";

export function IconMenu({ width = 24, height = 24, color = "black", className = "" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M0.75 4.5H13.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.5H13.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUser({ width = 30, height = 30, color = "white", className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width={width}
      height={height}
    >
      <path
        fill={color}
        d="M 16 5 C 12.144531 5 9 8.144531 9 12 C 9 14.410156 10.230469 16.550781 12.09375 17.8125 C 8.527344 19.34375 6 22.882813 6 27 L 8 27 C 8 22.570313 11.570313 19 16 19 C 20.429688 19 24 22.570313 24 27 L 26 27 C 26 22.882813 23.472656 19.34375 19.90625 17.8125 C 21.769531 16.550781 23 14.410156 23 12 C 23 8.144531 19.855469 5 16 5 Z M 16 7 C 18.773438 7 21 9.226563 21 12 C 21 14.773438 18.773438 17 16 17 C 13.226563 17 11 14.773438 11 12 C 11 9.226563 13.226563 7 16 7 Z"
      />
    </svg>
  );
}

export function IconTwitter({ width = 22, height = 16, color = "#A9A9A9", className = "" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
    >
      <g id="twitter-logo" opacity="0.55">
        <path
          id="Path"
          d="M21.0149 1.86772C20.2593 2.18447 19.4542 2.39442 18.6148 2.49636C19.4783 2.00364 20.1374 1.22937 20.4473 0.296117C19.6422 0.754854 18.7532 1.07888 17.8059 1.25971C17.0414 0.481796 15.9518 0 14.7631 0C12.4569 0 10.6003 1.78883 10.6003 3.9818C10.6003 4.29733 10.6283 4.60073 10.6968 4.88956C7.23377 4.72816 4.16946 3.14199 2.11092 0.725728C1.75153 1.3216 1.54072 2.00364 1.54072 2.73786C1.54072 4.1165 2.28363 5.33859 3.391 6.04612C2.72175 6.03398 2.0652 5.8483 1.50898 5.55583C1.50898 5.56796 1.50898 5.58374 1.50898 5.59951C1.50898 7.53398 2.95287 9.14078 4.84632 9.51092C4.50726 9.59951 4.13771 9.64199 3.75419 9.64199C3.48751 9.64199 3.21829 9.62743 2.96557 9.57403C3.50529 11.1505 5.03681 12.3095 6.85788 12.3471C5.44065 13.4066 3.64117 14.0449 1.69311 14.0449C1.35151 14.0449 1.02387 14.0303 0.696228 13.9903C2.54142 15.1274 4.72822 15.7767 7.08646 15.7767C14.7517 15.7767 18.9424 9.70874 18.9424 4.44903C18.9424 4.27306 18.9361 4.10316 18.9272 3.93447C19.7539 3.37379 20.4486 2.67354 21.0149 1.86772Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export function IconGithub({ width = 22, height = 20, color = "#A9A9A9", className = "" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
    >
      <g id="github-logo" opacity="0.55">
        <path
          id="Path"
          d="M11.1087 0.0131836C5.26579 0.0131836 0.527405 4.5591 0.527405 10.1669C0.527405 14.6521 3.55934 18.4573 7.76594 19.8011C8.29508 19.8946 8.48821 19.5811 8.48821 19.3118C8.48821 19.0704 8.47895 18.432 8.47366 17.585C5.53036 18.1981 4.90863 16.2235 4.90863 16.2235C4.42844 15.0504 3.73395 14.7381 3.73395 14.7381C2.77225 14.1086 3.80538 14.1212 3.80538 14.1212C4.86762 14.1932 5.42585 15.1679 5.42585 15.1679C6.37036 16.719 7.90352 16.2715 8.50673 16.0111C8.60197 15.355 8.8758 14.9075 9.17873 14.6534C6.82938 14.3968 4.35833 13.5258 4.35833 9.63596C4.35833 8.52729 4.77105 7.62089 5.44834 6.91043C5.33855 6.65381 4.97609 5.62099 5.55152 4.2241C5.55152 4.2241 6.44047 3.95104 8.46175 5.2645C9.30572 5.03948 10.2105 4.92697 11.1114 4.92318C12.0096 4.92823 12.9157 5.03948 13.761 5.26576C15.781 3.9523 16.6686 4.22536 16.6686 4.22536C17.2454 5.62352 16.8829 6.65507 16.7744 6.9117C17.453 7.62215 17.8618 8.52856 17.8618 9.63722C17.8618 13.5372 15.3881 14.3955 13.0308 14.6471C13.4105 14.9606 13.7491 15.58 13.7491 16.5269C13.7491 17.8846 13.7359 18.9794 13.7359 19.3118C13.7359 19.5836 13.9264 19.8997 14.4634 19.7998C18.6634 18.4547 21.6927 14.6509 21.6927 10.1669C21.6927 4.5591 16.9543 0.0131836 11.1087 0.0131836Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export function IconFacebook({ width = 12, height = 20, color = "#A9A9A9", className = "" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 20"
      fill="none"
    >
      <g id="facebook-logo" opacity="0.55">
        <path
          id="Path"
          d="M7.27006 6.875V4.375C7.27006 3.685 7.85606 3.125 8.57808 3.125H9.8861V0H7.27006C5.10268 0 3.34601 1.67875 3.34601 3.75V6.875H0.72998V10H3.34601V20H7.27006V10H9.8861L11.1941 6.875H7.27006Z"
          fill={color}
        />
      </g>
    </svg>
  );
}

export function IconArrowRight({ width = 9, height = 14, color = "#33363F", className = "" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 9 14"
      fill="none"
    >
      <path d="M1 1L7 7L1 13" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function IconShare({ width = 11, height = 10, color = "#F5F5F5", className = "flex-shrink-0" }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        d="M10.313 3.10362L7.34824 0.22066C7.27488 0.149325 7.18806 0.113647 7.08768 0.113647C6.98731 0.113647 6.90042 0.149325 6.82713 0.22066C6.75377 0.292035 6.71704 0.376505 6.71704 0.474091V1.91557H5.41998C2.66745 1.91557 0.978647 2.67199 0.353185 4.18481C0.148646 4.68776 0.0463867 5.31286 0.0463867 6.05988C0.0463867 6.68298 0.291529 7.52946 0.781774 8.59935C0.793335 8.62568 0.813535 8.67063 0.842538 8.73443C0.87152 8.79819 0.897541 8.8545 0.920703 8.90335C0.943945 8.95208 0.969054 8.99338 0.996049 9.02712C1.04233 9.09097 1.0964 9.12295 1.15818 9.12295C1.21608 9.12295 1.26145 9.1042 1.29429 9.06667C1.32704 9.02916 1.34345 8.98218 1.34345 8.92601C1.34345 8.89213 1.33862 8.84247 1.32895 8.77673C1.3193 8.711 1.31445 8.667 1.31445 8.64443C1.29512 8.38927 1.28547 8.15822 1.28547 7.95191C1.28547 7.57279 1.3193 7.23305 1.38679 6.93276C1.45439 6.63241 1.54799 6.37251 1.66769 6.15289C1.78737 5.93318 1.94174 5.74375 2.13094 5.5842C2.32007 5.42464 2.52367 5.29424 2.74178 5.19287C2.95993 5.09148 3.21663 5.0117 3.51195 4.95354C3.80725 4.89536 4.10448 4.85499 4.40369 4.83244C4.7029 4.8099 5.04164 4.7987 5.41998 4.7987H6.71704V6.24022C6.71704 6.3378 6.75369 6.42229 6.82699 6.49359C6.9004 6.56485 6.98723 6.60056 7.08754 6.60056C7.1879 6.60056 7.27478 6.56485 7.34824 6.49359L10.313 3.61054C10.3863 3.5392 10.423 3.45477 10.423 3.35716C10.4229 3.25958 10.3863 3.17509 10.313 3.10362Z"
        fill={color}
      />
    </svg>
  )
}

export function IconLogIn({ width = 14, height = 14, color = "black", className = "" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path d="M9.5 10.5V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V3.5" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.5 7H5.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 5L5.5 7L7.5 9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLogOut({ width = 14, height = 14, color = "black", className = "" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path d="M9.5 10.5V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V3.5" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.5 7H13.5" stroke={color} stroke-Llinecap="round" strokeLinejoin="round" />
      <path d="M11.5 5L13.5 7L11.5 9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFavorite({ width = 19, height = 16, color = "#CCCCCC", className = "" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 19 16" fill="none">
      <path opacity="0.503302" fillRule="evenodd" clipRule="evenodd" d="M8.43597 15.7388C8.63156 15.9072 8.88253 16 9.14286 16C9.40304 16 9.65416 15.9072 9.84961 15.739C10.59 15.1023 11.3033 14.5043 11.9328 13.9769L11.933 13.9767C13.7748 12.4329 15.3654 11.0997 16.4722 9.78616C17.7095 8.31791 18.2857 6.92567 18.2857 5.40473C18.2857 3.92701 17.7706 2.56372 16.8352 1.56581C15.8887 0.556101 14.5897 0 13.1776 0C12.1221 0 11.1554 0.3282 10.3045 0.975406C9.875 1.3021 9.48591 1.70192 9.14286 2.16828C8.79994 1.70192 8.41072 1.3021 7.98131 0.975406C7.13044 0.3282 6.16378 0 5.10826 0C3.69601 0 2.39718 0.556101 1.45061 1.56581C0.515207 2.56372 0 3.92701 0 5.40473C0 6.92567 0.576311 8.31791 1.81362 9.7863C2.92048 11.0998 4.5113 12.4332 6.35352 13.9772L6.35672 13.9799C6.98507 14.5065 7.69727 15.1035 8.43597 15.7388ZM2.24194 2.29072C2.983 1.50133 4.00167 1.06665 5.11055 1.06665C5.92273 1.06665 6.66853 1.32028 7.32706 1.82043C7.91405 2.26634 8.32286 2.83003 8.5624 3.22445C8.68565 3.42727 8.90261 3.54833 9.14284 3.54833C9.38308 3.54833 9.60003 3.42727 9.72328 3.22445C9.96296 2.83003 10.3718 2.26634 10.9586 1.82043C11.6171 1.32028 12.363 1.06665 13.1753 1.06665C14.284 1.06665 15.3028 1.50133 16.0437 2.29072C16.7958 3.09201 17.2101 4.19967 17.2101 5.40977C17.2101 6.68656 16.7269 7.82845 15.6439 9.11223C14.5978 10.352 13.0425 11.654 11.2417 13.1616L11.2368 13.1657C10.6052 13.6942 9.88948 14.2933 9.14131 14.9333C8.39759 14.2946 7.68302 13.6964 7.05266 13.1687L7.04931 13.166L7.04827 13.1651C5.24561 11.6561 3.68873 10.3529 2.64196 9.11223C1.55874 7.82845 1.07561 6.68656 1.07561 5.40977C1.07561 4.19967 1.48986 3.09201 2.24194 2.29072Z" fill={color} />
    </svg>
  )
}

export function IconFavoriteActive({ width = 19, height = 16, color = "#FF0000", className = "" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 19 16" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43597 15.7388C8.63156 15.9072 8.88253 16 9.14286 16C9.40304 16 9.65416 15.9072 9.84961 15.739C10.59 15.1023 11.3033 14.5043 11.9328 13.9769L11.933 13.9767C13.7748 12.4329 15.3654 11.0997 16.4722 9.78616C17.7095 8.31791 18.2857 6.92567 18.2857 5.40473C18.2857 3.92701 17.7706 2.56372 16.8352 1.56581C15.8887 0.556101 14.5897 0 13.1776 0C12.1221 0 11.1554 0.3282 10.3045 0.975406C9.875 1.3021 9.48591 1.70192 9.14286 2.16828C8.79994 1.70192 8.41072 1.3021 7.98131 0.975406C7.13044 0.3282 6.16378 0 5.10826 0C3.69601 0 2.39718 0.556101 1.45061 1.56581C0.515207 2.56372 0 3.92701 0 5.40473C0 6.92567 0.576311 8.31791 1.81362 9.7863C2.92048 11.0998 4.5113 12.4332 6.35352 13.9772L6.35672 13.9799C6.98507 14.5065 7.69727 15.1035 8.43597 15.7388ZM2.24194 2.29072C2.983 1.50133 4.00167 1.06665 5.11055 1.06665C5.92273 1.06665 6.66853 1.32028 7.32706 1.82043C7.91405 2.26634 8.32286 2.83003 8.5624 3.22445C8.68565 3.42727 8.90261 3.54833 9.14284 3.54833C9.38308 3.54833 9.60003 3.42727 9.72328 3.22445C9.96296 2.83003 10.3718 2.26634 10.9586 1.82043C11.6171 1.32028 12.363 1.06665 13.1753 1.06665C14.284 1.06665 15.3028 1.50133 16.0437 2.29072C16.7958 3.09201 17.2101 4.19967 17.2101 5.40977C17.2101 6.68656 16.7269 7.82845 15.6439 9.11223C14.5978 10.352 13.0425 11.654 11.2417 13.1616L11.2368 13.1657C10.6052 13.6942 9.88948 14.2933 9.14131 14.9333C8.39759 14.2946 7.68302 13.6964 7.05266 13.1687L7.04931 13.166L7.04827 13.1651C5.24561 11.6561 3.68873 10.3529 2.64196 9.11223C1.55874 7.82845 1.07561 6.68656 1.07561 5.40977C1.07561 4.19967 1.48986 3.09201 2.24194 2.29072Z" fill={color}/>
      <path d="M7 1.5L9 3L10 2L11.5 1L13.5 0.5L15 1L16 2L17 3L17.5 4.5V6L16.5 8.5L14.5 10.5L9 15.5L3 10L1 7.5L0.5 5L1.5 2.5L3.5 1L5.5 0.5L7 1.5Z" fill={color} />
    </svg>
  )
}