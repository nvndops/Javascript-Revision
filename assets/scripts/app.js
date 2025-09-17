import util from "./util.js"; //for default export we can name import like this
import { token, version as appVersion } from "./util.js"; //for named export we can import like this
import * as utilData from "./util.js"; //can import as object too and call them

console.log(util);
console.log(token);
console.log(appVersion);

console.log(utilData.default);