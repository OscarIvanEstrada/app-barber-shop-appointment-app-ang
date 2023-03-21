# SitePersonas


1. Si simplemente queremos la versión intermedia más reciente de Angular 11, debemos ejecutar ng update @angular/cli@11 y ng update @angular/core@11, o lo que sería lo mismo ng update @angular/core@11 @angular/cli@11.

ng new site-xxxxx

2. A continuación instalamos Tailwind CSS con el comando 

npm install -D tailwindcss

3. Creamos el fichero de configuración de Tailwind CSS tailwind.config.js en la carpeta raíz de nuestra aplicación con el comando 

npx tailwindcss init

4. Configuramos Tailwind CSS para que elimine los estilos no utilizados en nuestra aplicación:
    module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.{html,ts}'],
    },
    ...
    }
    tailwind.config.js

5. Y finalmente importamos los estilos base a nuestro fichero styles.scss:

/* You can add global styles to this file, and also import other style files */
@tailwind base;

@tailwind components;

@tailwind utilities;

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  /**
   * Render the `main` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from `fieldset` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    `fieldset` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to `inherit` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }
  
  /**
   * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
   * A thin layer on top of normalize.css that provides a starting point more
   * suitable for web applications.
   */
  
  /**
   * Removes the default spacing and border for appropriate elements.
   */
  
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  
  button {
    background-color: transparent;
    background-image: none;
  }
  
  /**
   * Work around a Firefox/IE bug where the transparent `button` background
   * results in a loss of the default `button` focus styles.
   */
  
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  fieldset {
    margin: 0;
    padding: 0;
  }
  
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /**
   * Tailwind custom reset styles
   */
  
  /**
   * 1. Use the user's configured `sans` font-family (with Tailwind's default
   *    sans-serif font stack as a fallback) as a sane default.
   * 2. Use Tailwind's default "normal" line-height so the user isn't forced
   *    to override it to ensure consistency even when using the default theme.
   */
  
  html {
    font-family: Nunito, sans-serif; /* 1 */
    line-height: 1.5; /* 2 */
  }
  
  /**
   * 1. Prevent padding and border from affecting element width.
   *
   *    We used to set this in the html element and inherit from
   *    the parent element for everything else. This caused issues
   *    in shadow-dom-enhanced elements like <details> where the content
   *    is wrapped by a div with box-sizing set to `content-box`.
   *
   *    https://github.com/mozdevs/cssremedy/issues/4
   *
   *
   * 2. Allow adding a border to an element by just adding a border-width.
   *
   *    By default, the way the browser specifies that an element should have no
   *    border is by setting it's border-style to `none` in the user-agent
   *    stylesheet.
   *
   *    In order to easily add borders to elements by just setting the `border-width`
   *    property, we change the default border-style for all elements to `solid`, and
   *    use border-width to hide them instead. This way our `border` utilities only
   *    need to set the `border-width` property instead of the entire `border`
   *    shorthand, making our border utilities much more straightforward to compose.
   *
   *    https://github.com/tailwindcss/tailwindcss/pull/116
   */
  
  *,
  ::before,
  ::after {
    box-sizing: border-box; /* 1 */
    border-width: 0; /* 2 */
    border-style: solid; /* 2 */
    border-color: #e2e8f0; /* 2 */
  }
  
  /*
   * Ensure horizontal rules are visible by default
   */
  
  hr {
    border-top-width: 1px;
  }
  
  /**
   * Undo the `border-style: none` reset that Normalize applies to images so that
   * our `border-{width}` utilities have the expected effect.
   *
   * The Normalize reset is unnecessary for us since we default the border-width
   * to 0 on all elements.
   *
   * https://github.com/tailwindcss/tailwindcss/issues/362
   */
  
  img {
    border-style: solid;
  }
  
  textarea {
    resize: vertical;
  }
  
  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #a0aec0;
  }
  
  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #a0aec0;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #a0aec0;
  }
  
  button,
  [role="button"] {
    cursor: pointer;
  }
  
  table {
    border-collapse: collapse;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  
  /**
   * Reset links to optimize for opt-in styling instead of
   * opt-out.
   */
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
  
  /**
   * Reset form element properties that are easy to forget to
   * style explicitly so you don't inadvertently introduce
   * styles that deviate from your design system. These styles
   * supplement a partial reset that is already applied by
   * normalize.css.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }
  
  /**
   * Use the configured 'mono' font family for elements that
   * are expected to be rendered with a monospace font, falling
   * back to the system monospace stack if there is no configured
   * 'mono' font family.
   */
  
  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  
  /**
   * Make replaced elements `display: block` by default as that's
   * the behavior you want almost all of the time. Inspired by
   * CSS Remedy, with `svg` added as well.
   *
   * https://github.com/mozdevs/cssremedy/issues/14
   */
  
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  
  /**
   * Constrain images and videos to the parent width and preserve
   * their instrinsic aspect ratio.
   *
   * https://github.com/mozdevs/cssremedy/issues/14
   */
  
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  
  .bg-white {
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
  }
  
  .bg-gray-100 {
    --bg-opacity: 1;
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));
  }
  
  .bg-teal-500 {
    --bg-opacity: 1;
    background-color: #38b2ac;
    background-color: rgba(56, 178, 172, var(--bg-opacity));
  }
  
  .hover\:bg-teal-600:hover {
    --bg-opacity: 1;
    background-color: #319795;
    background-color: rgba(49, 151, 149, var(--bg-opacity));
  }
  
  .border-gray-200 {
    --border-opacity: 1;
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--border-opacity));
  }
  
  .border-teal-500 {
    --border-opacity: 1;
    border-color: #38b2ac;
    border-color: rgba(56, 178, 172, var(--border-opacity));
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  
  .rounded-md {
    border-radius: 0.375rem;
  }
  
  .border {
    border-width: 1px;
  }
  
  .block {
    display: block;
  }
  
  .inline {
    display: inline;
  }
  
  .flex {
    display: flex;
  }
  
  .table {
    display: table;
  }
  
  .hidden {
    display: none;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .flex-auto {
    flex: 1 1 auto;
  }
  
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .font-light {
    font-weight: 300;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .h-3 {
    height: 0.75rem;
  }
  
  .h-10 {
    height: 2.5rem;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .text-5xl {
    font-size: 3rem;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-3 {
    margin-bottom: 0.75rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mr-5 {
    margin-right: 1.25rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .mr-10 {
    margin-right: 2.5rem;
  }
  
  .mt-12 {
    margin-top: 3rem;
  }
  
  .focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  
  .overflow-auto {
    overflow: auto;
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .p-3 {
    padding: 0.75rem;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  .fixed {
    position: fixed;
  }
  
  .absolute {
    position: absolute;
  }
  
  .relative {
    position: relative;
  }
  
  .top-0 {
    top: 0;
  }
  
  .right-0 {
    right: 0;
  }
  
  .bottom-0 {
    bottom: 0;
  }
  
  .left-0 {
    left: 0;
  }
  
  .shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  
  .fill-current {
    fill: currentColor;
  }
  
  .text-white {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
  }
  
  .text-gray-600 {
    --text-opacity: 1;
    color: #718096;
    color: rgba(113, 128, 150, var(--text-opacity));
  }
  
  .text-gray-700 {
    --text-opacity: 1;
    color: #4a5568;
    color: rgba(74, 85, 104, var(--text-opacity));
  }
  
  .text-gray-800 {
    --text-opacity: 1;
    color: #2d3748;
    color: rgba(45, 55, 72, var(--text-opacity));
  }
  
  .text-teal-500 {
    --text-opacity: 1;
    color: #38b2ac;
    color: rgba(56, 178, 172, var(--text-opacity));
  }
  
  .text-teal-600 {
    --text-opacity: 1;
    color: #319795;
    color: rgba(49, 151, 149, var(--text-opacity));
  }
  
  .hover\:text-gray-700:hover {
    --text-opacity: 1;
    color: #4a5568;
    color: rgba(74, 85, 104, var(--text-opacity));
  }
  
  .w-3 {
    width: 0.75rem;
  }
  
  .w-10 {
    width: 2.5rem;
  }
  
  .w-full {
    width: 100%;
  }
  
  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  @-webkit-keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @-webkit-keyframes pulse {
    50% {
      opacity: .5;
    }
  }
  
  @keyframes pulse {
    50% {
      opacity: .5;
    }
  }
  
  @-webkit-keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
              animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
  
    50% {
      transform: none;
      -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
              animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
              animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
  
    50% {
      transform: none;
      -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
              animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }
  
  @media (min-width: 640px) {
    .sm\:container {
      width: 100%;
    }
  
    @media (min-width: 640px) {
      .sm\:container {
        max-width: 640px;
      }
    }
  
    @media (min-width: 768px) {
      .sm\:container {
        max-width: 768px;
      }
    }
  
    @media (min-width: 1024px) {
      .sm\:container {
        max-width: 1024px;
      }
    }
  
    @media (min-width: 1280px) {
      .sm\:container {
        max-width: 1280px;
      }
    }
  }
  
  @media (min-width: 768px) {
    .md\:container {
      width: 100%;
    }
  
    @media (min-width: 640px) {
      .md\:container {
        max-width: 640px;
      }
    }
  
    @media (min-width: 768px) {
      .md\:container {
        max-width: 768px;
      }
    }
  
    @media (min-width: 1024px) {
      .md\:container {
        max-width: 1024px;
      }
    }
  
    @media (min-width: 1280px) {
      .md\:container {
        max-width: 1280px;
      }
    }
  }
  
  @media (min-width: 1024px) {
    .lg\:container {
      width: 100%;
    }
  
    @media (min-width: 640px) {
      .lg\:container {
        max-width: 640px;
      }
    }
  
    @media (min-width: 768px) {
      .lg\:container {
        max-width: 768px;
      }
    }
  
    @media (min-width: 1024px) {
      .lg\:container {
        max-width: 1024px;
      }
    }
  
    @media (min-width: 1280px) {
      .lg\:container {
        max-width: 1280px;
      }
    }
  
    .lg\:inline-block {
      display: inline-block;
    }
  
    .lg\:flex {
      display: flex;
    }
  
    .lg\:hidden {
      display: none;
    }
  
    .lg\:text-xl {
      font-size: 1.25rem;
    }
  
    .lg\:text-2xl {
      font-size: 1.5rem;
    }
  
    .lg\:text-6xl {
      font-size: 4rem;
    }
  
    .lg\:mt-0 {
      margin-top: 0;
    }
  
    .lg\:mr-0 {
      margin-right: 0;
    }
  
    .lg\:mb-6 {
      margin-bottom: 1.5rem;
    }
  
    .lg\:mt-32 {
      margin-top: 8rem;
    }
  
    .lg\:pl-24 {
      padding-left: 6rem;
    }
  
    .lg\:w-1\/2 {
      width: 50%;
    }
  }
  
  @media (min-width: 1280px) {
    .xl\:container {
      width: 100%;
    }
  
    @media (min-width: 640px) {
      .xl\:container {
        max-width: 640px;
      }
    }
  
    @media (min-width: 768px) {
      .xl\:container {
        max-width: 768px;
      }
    }
  
    @media (min-width: 1024px) {
      .xl\:container {
        max-width: 1024px;
      }
    }
  
    @media (min-width: 1280px) {
      .xl\:container {
        max-width: 1280px;
      }
    }
  }
  

6. Copiar ejemplo
    https://tailwindui.com/components/marketing/sections/heroes    


ng generate component home

ng build 

firebase deploy --project microservicesco

