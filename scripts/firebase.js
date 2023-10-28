import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getDatabase,ref,set,child,update,remove,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrkDCtJwtpI07arEDcfUlhTorYyW7o4tA",
  authDomain: "mrr-design.firebaseapp.com",
  databaseURL: "https://mrr-design-default-rtdb.firebaseio.com",
  projectId: "mrr-design",
  storageBucket: "mrr-design.appspot.com",
  messagingSenderId: "61654214726",
  appId: "1:61654214726:web:b2c9fff99bcceea5c2c247",
  measurementId: "G-Q8JX008GXZ"
};

const app = initializeApp(firebaseConfig);
export const  database=getDatabase()

console.log(database)

export let insertUsers=(jsonObject)=>
{
    console.log(jsonObject)
    set(ref(database,"users/"+jsonObject.username),{
        firstName:jsonObject["firstName"],
        lastName:jsonObject["lastName"],
        email:jsonObject["email"],
        username:jsonObject["username"],
        password:jsonObject["password"],    
    }).then(()=>{
        alert("Data stored successfully")
    }).catch((error)=>{
        alert("Error "+error)
    })
}

export let getUsers=(username,password)=>
{
    let flag=0
    const users = ref(database, 'users/');
    onValue(users, (snapshot) => {
    const data = snapshot.val();
    
    Object.keys(data).forEach(function(key) {
      if(data[key].username===username&&data[key].password===password)
      {
        alert("logged in successfully")
        //localStorage.setItem("currentUser",JSON.stringify(getCurrentUser(username,password)))
        console.log(data[key])
        updateCurrentUser(data[key])
        flag =1
        location.href="http://127.0.0.1:5501/home.html"
      }
    });
    if(flag===0)
      {
        alert("Invalid Username or Password")
      }
 
    });

}
export let insertCurrentUser=(jsonObject)=>
{
    set(ref(database,"currentUser"),{
        firstName:jsonObject["firstName"],
        lastName:jsonObject["lastName"],
        email:jsonObject["email"],
        username:jsonObject["username"],
        password:jsonObject["password"],
        cart:jsonObject["cart"],
    }).then(()=>{
        alert("Data stored successfully")
    }).catch((error)=>{
        alert("Error "+error)
    })
}
export let getCurrentUser=()=>
{
    const users = ref(database, 'currentUser/');
    onValue(users, (snapshot) => {
    const data = snapshot.val();
    });

}
export let insertCurrentItem=(jsonObject)=>
{
    set(ref(database,"currentItem/"),{
        productID:jsonObject["productID"],
        productName:jsonObject["productName"],
        price:jsonObject["price"],
       pictures:jsonObject["pictures"],
       
    }).then(()=>{
        alert("Data stored successfully")
    }).catch((error)=>{
        alert("Error "+error)
    })
}
export let getCurrentItem=()=>
{
    const users = ref(database, 'currentItem');
    onValue(users, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    });
}
export let insertMenProducts=(jsonObject)=>
{
    set(ref(database,"menProducts/"+jsonObject["productID"]),{
        productID:jsonObject["productID"],
        productName:jsonObject["productName"],
        price:jsonObject["price"],
        pictures:jsonObject["pictures"],
    }).then(()=>{
        alert("Data stored successfully")
    }).catch((error)=>{
        alert("Error "+error)
    })
}
export let insertWomenProducts=(jsonObject)=>
{
    set(ref(database,"womenProducts/"+jsonObject["productID"]),{
        productID:jsonObject["productID"],
        productName:jsonObject["productName"],
        price:jsonObject["price"],
        pictures:jsonObject["pictures"],
    }).then(()=>{
        alert("Data stored successfully")
    }).catch((error)=>{
        alert("Error "+error)
    })
}

export let getMenProducts=()=>
{
    const users = ref(database, 'menProducts');
    onValue(users, async (snapshot) => {
    const data = snapshot.val();
    return await data
    });
}
export let getWomenProducts=()=>
{
    const users = ref(database, 'womenProducts');
    onValue(users, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    });
}

export let updateUser=(username,user)=>
{
    const updates={}
    updates["users/"+username]=user
    update(ref(database),updates)
}
export let updateCurrentUser=(user)=>
{
    const updates={}
    updates["currentUser/"]=user
    update(ref(database),updates)

}