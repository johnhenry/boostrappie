'use strict';

var babelPolyfill = require('babel-polyfill');

var apply = ({application, args, logger, errorrer})=>{
  const result = application(args);
  if(result){
    if(typeof result.then === 'function'){
      //Promise
      return result
        .then(logger, errorrer)
    }else if(typeof result.subscribe === 'function'){
      //Observable
      return result.subscribe(logger);
    }
  }else{
    logger(result);
    return result;
  }
};

const logger = console.log.bind(console);
const errorrer= console.error.bind(console);
const bootstrappie = (application, args)=>apply({application, args, logger, errorrer});

module.exports = bootstrappie;
