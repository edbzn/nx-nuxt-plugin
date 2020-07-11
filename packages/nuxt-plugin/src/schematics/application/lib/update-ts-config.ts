import { Rule } from '@angular-devkit/schematics';
import { NormalizedSchema } from './normalize-options';

export function updateTsConfig(options: NormalizedSchema): Rule {
  return (host) => {
    const configPath = `${options.appProjectRoot}/tsconfig.json`;
    const content = `
      {
        "compilerOptions": {
          "target": "es2018",
          "module": "esnext",
          "moduleResolution": "node",
          "lib": [
            "esnext",
            "esnext.asynciterable",
            "dom"
          ],
          "esModuleInterop": true,
          "allowJs": true,
          "sourceMap": true,
          "strict": true,
          "noEmit": true,
          "experimentalDecorators": true,
          "baseUrl": ".",
          "paths": {
            "~/*": [
              "./*"
            ],
            "@/*": [
              "./*"
            ]
          },
          "types": [
            "@types/node",
            "@nuxt/types"
          ]
        },
        "exclude": [
          "node_modules",
          ".nuxt",
          "dist"
        ]
      }`;

    host.overwrite(configPath, content);
  };
}
