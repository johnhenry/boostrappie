#!/usr/bin/env node
const entrypoint = require('./entrypoint');
const logger = console.log.bind(console);
const errorrer= console.error.bind(console);
const apply = require('./apply');
//Collect Arguments
let args = require('yargs').argv;
const location = require('path').join(
  process.cwd(), args._[0]);
const MAPNAME = 'ARG_MAPPER';
if(args[MAPNAME]){
  let mapper = args[MAPNAME];
  delete args[MAPNAME];
  mapper = typeof mapper === 'function' ? mapper : mapper.default;
  args = mapper(args, process);
}
//Set application
let application = entrypoint(location).default;
if(typeof application !== 'function'){
  application = application.default;
}
apply({application, args, logger, errorrer});
