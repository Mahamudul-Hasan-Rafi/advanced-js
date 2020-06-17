add=function(){
    console.log(arguments);
    
    console.log("  ");

    for(let i=0; i<arguments.length; i++)
       console.log(arguments[i]);
}

add(9,8,6,45,65);

obj={0:"POCO",name:"Rafi",id:346,dept:"cse"};
console.log(obj);
console.log(obj[0]);
console.log(obj.length);

//'arguments' is not neither a full-fledged array nor an object. It's a middle of these 2