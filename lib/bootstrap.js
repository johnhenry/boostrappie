import "babel-polyfill";
import apply from './applyes6';
const logger = console.log.bind(console);
const errorrer= console.error.bind(console);
const boostrappie = (application, args)=>apply({application, args, logger, errorrer});
export default bootstrappie;
