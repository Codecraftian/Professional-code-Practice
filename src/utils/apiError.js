class apiError extends Error{
  constructor(
    statusCode,
    message= "Something went wrong" , 
    errors = [],
    stack = ""
  ){
    supper(message)
    this.stack = stack
    this.message = message
    this.data = null 
    this.statusCode = statusCode
    this.errors = errors

    if(stack){
      this.stack = stack
    }else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}