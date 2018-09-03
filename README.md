# Parcel Vue Demo    

A Vue demo including Code Splitting, Hot Reloading, ESLint, Vuex, Vue Router and Less.

## :fire: Get Started

```bash
git clone git@github.com:proYang/vue-parcel-demo.git
cd vue-parcel-demo
npm install
# or
yarn install
```

## :building_construction: Development

```bash
npm run dev
# or
yarn dev
```
the application opened `http://127.0.0.1:1234` in the browser default.

## :rocket: Build

```bash
npm run build
# or
yarn build
```
the default output directory is `/dist`. You can change the destination in `package.json`.

## :bento: Code Linting

```bash
npm run lint
# or
yarn lint
```
Linting your code by ESLint.    

Edit `.eslintrc.js` file to configure rules.
See: 
- [http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)    
- [https://github.com/vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 

## :package: Other Config
If you want to use other configs( port, public-url, out-dir... ), see the [Parcel official documentation](https://parceljs.org/) or submit the Issue.