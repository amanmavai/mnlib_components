## build process

> the build process is very simple for this project, it involves using  
> **typescript**: compiles typescript files to js files, generate type declarations  
> **tailwindcss-cli**: generate a styles.css file in the dist folder

```sh
npm init --y

# add prettier
touch .prettierrc .prettierignore
npm i -D prettier

# add .gitignore
touch .gitignore

# add typescript
npm i -D typescript
touch tsconfig.json

# add react and react-dom
npm i -D react react-dom @types/react @types/react-dom

# add styling using tailwindcss cli
npm i -D tailwindcss
npx tailwindcss init
npm i -D prettier-plugin-tailwindcss

npm i clsx tailwind-merge
```