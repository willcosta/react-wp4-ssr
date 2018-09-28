export default (html, styles, scripts, helmet, initialState) => `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
            <link rel="stylesheet" href="/assets/css/main.css" />
            ${styles.map(style => {
              if (style.file.endsWith('css')) {
                return `<link rel="stylesheet" href="/${style.file}" />`
              }
          }).join('\n')}
        </head>
        <body>
            <div id="root">${html}</div>
            <script type="text/javascript" charset="utf-8">
              window.__INITIAL_STATE__ = ${initialState};
            </script>
            ${scripts.map(script => {
                if (script.file.endsWith('js')) {
                    return `<script src="/${script.file}"></script>`
                }
            }).join('\n')}
            <script src="/assets/js/vendor.js"></script>
            <script src="/assets/js/client.js"></script>
        </body>
    </html>
`;
