# Repository demonstrating Vite Dynamic Module issue

https://github.com/vitejs/vite/issues/11804

When running a project built in Vite you can hit:

> TypeError: Failed to fetch dynamically imported module

This repository demonstrates it.

## To reproduce:

-   npm install
-   npm run build

Then in 2 different terminals:

-   npx serve dist (starts a web server)
-   visit the page in your browser (usually localhost:3000)

Other terminal (within 10s of launching page):

-   modify the string in Foo.jsx
-   npm run build
