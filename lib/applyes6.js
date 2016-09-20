export default ({application, args, logger, errorrer})=>{
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
