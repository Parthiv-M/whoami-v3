import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font-family: inherit;
      vertical-align: baseline;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColors.primary};
    transition: all 0.50s linear;
  }

  body {
    overflow-x: hidden;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
      display: block;
  }

  body {
      line-height: 1;
      font-family: 'Questrial', sans-serif;
  }

  ol,
  ul {
      list-style: none;
  }

  blockquote,
  q {
      quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  /* Works on Firefox */
	body {
		scrollbar-width: thin;
		scrollbar-color: blue;
	}

	/* Works on Chrome, Edge, and Safari */
	body::-webkit-scrollbar {
		width: 10px;
	}

	body::-webkit-scrollbar-track {
		background: transparent;
	}

	body::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.179);
	}

	body::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(270deg, #ff0844 0%, #ffb199 100%);
	}

  .generic-container {
    width: 75%;
    margin-top: 0.5rem;

    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 0 1rem;
    }
  }

  .verbose .generic-container {
    margin-top: 0;
  }

  .verbose {
    margin: 2rem;
    border-radius: 1rem;
    background: rgba(0,0,0,0.05);
    padding: 3rem 0rem;
  }

  .minimal {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
    border-radius: 1rem;
    background: rgba(0,0,0,0.05);
    transition: background 2000ms ease-in;
  }

  // to remove later

  .loaded.art-cards {
      opacity: 1;
  }

  .moving.swipey-card {
    transition: none;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }

  .is-pinned {
    backdrop-filter: blur(1rem);
    h2 {
      font-size: 1rem!important;
    }
  }
}
`

export default GlobalStyle
