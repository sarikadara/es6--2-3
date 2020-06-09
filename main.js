"use strict"

//var a = 'Test1';
//let b = 'TEST2';
//console.log(b);
/*
function testVar(){
  var a = 80;
  if(true){
    var a = 90;
    console.log(a);
  }
  console.log(a);
}
 
function testLet(){
  let a = 80;
  if(true){
    let a = 90;
    console.log(a);
  }
  console.log(a);
}
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);
*/

//const colors = [];

//colors.push('red');
//colors.push('blue');

//colors = 'Green';

//console.log(colors);



class User{

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
  
    static countUsers(){
      console.log('There are 50 users');
    }
  
    register(){
      console.log(this.username+' is now registered');
    }
  }
  
  //let SARIKA = new User('SARIKA', 'SARIKA.DARA@email.com', '924735');
  //SARIKA.register();
  //User.countUsers();
  
  class Member extends User{
    constructor(username, email, password, memberPackage){
      super(username, email, password);
      this.package = memberPackage;
    }
  
    getPackage(){
     console.log(this.username+' is subscribed to the '+this.package+' package');
    }
  }
  
  let suma= new Member('SUMA', 'suma@gmail.com', '5556', 'Standard');
  
  //suma.getPackage();
  suma.register();

