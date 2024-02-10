//  *******Q1*******
function simulateAsyncOperation(shouldSucceed){
    return new Promise((success,reject) =>{
    setTimeout( () =>{
    if(shouldSucceed){
        success("OK");
    }
    else{
    reject(new Error("Error"));
    }},5000)
})
}
simulateAsyncOperation(true)
  .then(message => console.log(message))
  .catch(error => console.error(error));
simulateAsyncOperation(false)
  .then(message => console.log(message))
  .catch(error => console.error(error));


//  *******Q2*******
function fetchData(){
    return new Promise((resolve)=>{
    setTimeout( () => {
        const data = "HELLO WORLD"
        resolve(data)
    },5000)
  }  )
}

function processData(data){
    return new Promise((resolve)=>{
    setTimeout( () => {
        resolve(data)
    },5000)
  }  )
}

fetchData()
  .then(data => processData(data))
  .then(processed_Data => {
    console.log("DATA FETCHED:", processed_Data);
  })
  .catch(error => {
    console.error("ERROR:", error);
  });