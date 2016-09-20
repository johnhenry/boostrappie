// set babel in entry file
require('babel-register')({
  plugins: ['transform-async-to-generator', 'transform-react-jsx'],
  presets:['stage-3', 'es2015', 'es2016', 'es2017']
});
require("babel-polyfill");
module.exports = (target)=>require(target);
