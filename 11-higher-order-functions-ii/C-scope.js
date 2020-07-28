/* before we talk about closure, let's review how scope works with nested functions */

/* inner functions can access variables defined in outer functions */

function greeter() {
  let name = 'Marie'; 
  function saysHi() {
    console.log('Hi', name);
  };
  saysHi();
}

greeter();
