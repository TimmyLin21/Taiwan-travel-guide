import { createGlobalStyle } from "styled-components";
import { device } from "./break-point";

export const GlobalStyles = createGlobalStyle`
  h1,h2,h3,h4,p, span {
    font-family: 'Noto Sans TC', sans-serif;
  }
  h1,h2,h3,h4 {
    font-weight: 700;
  }
  h1 {
    font-size: 3.625rem;
  }
  h2 {
    font-size: 1.5rem;
    @media ${device.md}{
      font-size: 2.0625rem;
    }
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    @media ${device.md} {
      font-size: 1.125rem;
    }
  }
  span {
    font-size: 0.875rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ::placeholder {
    color: var(--color-textPlaceholder);
    font-size: 1.125rem;
  }
  button {
    cursor: pointer;
  }
  html {
    --color-primary: rgba(63, 177, 149, 1);
    --color-secondary: rgba(63, 177, 149, 0.2);
    --color-tertiary: rgba(63, 177, 149, 0.08);
    --color-text: rgba(34, 34, 34, 1);
    --color-textSpan: rgba(0, 0, 0, 0.6);
    --color-textPlaceholder: rgba(0, 0, 0, 0.38);
    --color-border: rgba(0, 0, 0, 0.08);
    --color-bg: rgba(250, 250, 250, 1);
    --shadow-sm: 0px 9.77842px 16.763px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 14px 24px rgba(0, 0, 0, 0.04);
    --shadow-lg: 0px 5px 15px rgba(0, 0, 0, 0.35);
    --radius-sm: .5rem;
    --radius-md: 1rem;
  }
`


export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;