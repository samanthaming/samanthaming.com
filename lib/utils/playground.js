// https://dev.to/pulljosh/how-to-load-html-css-and-js-code-into-an-iframe-2blc
// https://github.com/agneym/playground/blob/master/playground/src/Playground.tsx
// https://www.joshwcomeau.com/blog/how-i-built-my-blog/#code-snippets

export function getBlobURL(code, type) {
  const blob = new Blob([code], { type });
  return URL.createObjectURL(blob);

  // NOT WORKING!
  // Blob is not defined
  // https://stackoverflow.com/questions/14653349/node-js-cant-create-blobs
  // const blob = Buffer.from([code]);
  // let arraybuffer = Uint8Array.from(buffer).buffer;
}

// Because "Blob" is not working, so this function doesn't work
// Use "getSrcDoc" instead
export function getGeneratedPageURL({ html, css, js } = {}) {
  const cssUrl = getBlobURL(css, 'text/css');
  const jsUrl = getBlobURL(js, 'text/javascript');

  const source = `
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssUrl}" />`}
        ${js && `<script src="${jsUrl}"></script>`}
      </head>
      <body>
        ${html || ''}
      </body>
    </html>
  `;
  return getBlobURL(source, 'text/html');
}

/** To use:

  return getSrcDoc({
    html: '<p>Hello, world!</p>',
    css: 'p { color: blue; } ',
    js: 'console.log("hi")',
  });
*/
export function getSrcDoc({ html, css, js } = {}) {
  return `
    <html>
      ${css && `<head><style>${css}</style></head>`}
      <body>
        ${html}
        ${js && `<script>${js}</script>`}
      </body>
    </html>
  `;
}
