# VitePress Resume

This project rewrites the old VuePress site using [VitePress](https://vitepress.dev), [UnoCSS](https://github.com/unocss/unocss) and Vue 3.

Run development server:

```bash
npm run docs:dev
```

Build static site:

```bash
npm run docs:build
```

Deployment:

The project includes a GitHub Actions workflow that builds the docs and
publishes them to the `gh-pages` branch whenever changes are pushed to the
`master` branch. If you prefer to deploy manually, run the following script:

```bash
./deploy.sh
```
