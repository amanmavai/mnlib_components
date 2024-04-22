- Think of all code inside the src folder as your demo page.
- The main entry point of your library will be a file named main.ts inside of lib. When installing the library you can import everything that is exported from this file.
- To ensure only the lib directory is included during the build process you can create a separate TypeScript configuration file specifically for building
- By default dts will generate types for both src and lib because both folders are included in the project's .tsconfig. This is why we need to pass one configuration parameter: include: ['lib'].
- Vite uses the tsconfig.json for type-checking and ensuring that your TypeScript code adheres to the configurations specified. However, Vite itself is responsible for bundling, not the TypeScript compiler.
- noEmit: true in tsconfig.json means TypeScript is used purely for type checking, while Vite (along with Rollup, which it uses internally) handles all file outputs.

### Fully tree shakeable

For me it was particularly important that only necessary code ends up in the final application. When you import a component, it only includes the necessary JS and CSS styles.

The libInjectCSS plugin generates a separate CSS file for each chunk and includes an import statement at the beginning of each chunk's output file.

### Compiled CSS modules

The components are styled with CSS modules. When building the library, these styles will get transformed to normal CSS style sheets. This means that the consuming application will not even be required to support CSS modules.
