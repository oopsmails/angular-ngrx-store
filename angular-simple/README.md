# AngularSimple

## Testing TranslateService


npm install @ngx-translate/core --save

https://github.com/ngx-translate/core/issues/636

`npm run test -- --include src/app/translation-test`

ng g c translation-test

- totally unit test
https://stackoverflow.com/questions/49172531/ngx-translate-translate-string-in-unit-testing


- unit test tricks
http://yuezhizizhang.github.io/angular6/unit-testing/2019/03/27/angular-unit-tests-tricks.html


- from real en.json
https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts



const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../assets/i18n/fr.json');

npm install @ngx-translate/http-loader --save

"@ngx-translate/http-loader": "^6.0.0",

npm i @types/node --save

error TS2591: Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i @types/node` and then add `node` to the types field in your tsconfig.

"@types/node": "^12.19.16",

