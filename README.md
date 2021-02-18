# Vite Vue Template

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its Plugin API and JavaScript API with full typing support.

You can learn more about the rationale behind the project in the Why Vite section.

# Commands

- Generate Template

Use this command to generate vite vue template
```
npm init @vitejs/app my-vue-app --template vue
```

npm 7+, extra double-dash is needed:
```
npm init @vitejs/app my-vue-app -- --template vue
```

- Run local server
```
npm run dev
```

- Locally preview production build
```
npm run serve
```

- Build for production
```
npm run build
```