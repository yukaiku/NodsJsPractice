const url = require("url");


const myurl = new URL("http://mywebsite.com/hello.html?id=100&status=active");


//Serialise URL
console.log(myurl.href);
console.log(myurl.toString());

//Host(root domain
console.log(myurl.host);

//host name //Does not get the port
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);

//serialise query
console.log(myurl.search);

//Params obj
console.log(myurl.searchParams);

//Get specific param
console.log(myurl.searchParams.get("id"));
//Get an array of same param ID
console.log(myurl.searchParams.getAll("id"));

//Add params
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams);

//Loop thru params
myurl.searchParams.forEach((value,name)=>console.log(`${name} : ${value}`));