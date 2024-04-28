```sh
npm create vite@latest mnlib_components -- --template react-ts

# prettier
npm install -D prettier

# lib
mkdir lib
touch lib/main.ts

npm i @types/node -D

# separate tsconfig file for lib
touch tsconfig-build.json

# add vite plugins
npm i -D vite-plugin-dts vite-plugin-lib-inject-css

npm i -D glob

npm i clsx

# tailwindcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D prettier-plugin-tailwindcss
npm i -D tailwind-merge

# shadcn/ui
npx shadcn-ui@latest init

npx shadcn-ui@latest add button

```
