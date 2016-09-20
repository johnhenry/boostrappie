import "babel-polyfill";
import apply from './apply';
const logger = console.log.bind(console);
const errorrer= console.error.bind(console);
const boostrappie = (application, args)=>apply({application, args, logger, errorrer});
export {boostrappie};
export default bootstrappie;
