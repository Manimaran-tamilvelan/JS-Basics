//most of the time we use external service those things are done easily with objects

let myApp = {
    name: 'Hello',
    version: 1.0 ,

    getUpdgrade: function(newversion){
       this.version = newversion
       
    }
}

console.log(myApp);

//want to access specific values
console.log(myApp.version);
myApp.getUpdgrade(2);
console.log(myApp.version);

