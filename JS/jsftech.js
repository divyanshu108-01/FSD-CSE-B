const url = "https://dummyjson.com/users?limit=1";
// const pr = fetch(url);
// pr.then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("name=",data.users[0].firstName);
//     console.log("email=",data.users[0].email);
//     console.log("ip=",data.users[0].ip);
//     console.log("Mac address=",data.users[0].macAddress);
    
// }).catch((error)=>{
//     console.error("error:- ",error.message)
// })



const f1 = async () => {
  try {
    const res = await fetch(url);
    const jsondata = await res.json();  

    jsondata.users.forEach((da) => {     
      console.log("name:", da.firstName);
      console.log("email:", da.email);
      console.log("ip:", da.ip);
      console.log("mac:", da.macAddress);
    });
  } catch (err) {
    console.error("error:", err.message);
  }
};

f1();