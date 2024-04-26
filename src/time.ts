
function returnedValue(fn: ()=> void)  {
  setTimeout(fn, 1000);
}

returnedValue(function(){
    console.log("hello world")
})