import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const fs = require('fs');
console.log(fs);
console.log(require) // [Function: require]
