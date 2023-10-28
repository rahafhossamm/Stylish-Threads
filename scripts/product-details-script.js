import { getCurrentUser,users } from "./users.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getDatabase,ref,set,child,update,remove,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { insertCurrentUser, insertUsers, updateCurrentUser, updateUser } from "./firebase.js";
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
var testArray=[]
const app = initializeApp(firebaseConfig);
export const  database=getDatabase()

let currentSize=""
let quantity=""
export let getCurrentItemFireBase=()=>
{
    const item = ref(database, 'currentItem');
    onValue(item, (snapshot) => {

    const currentProduct = snapshot.val();
    console.log(currentProduct)
 

    

for(let i=0;i<document.getElementsByClassName("side-picture").length;i++)
{
    document.getElementsByClassName("side-picture")[i].src=currentProduct.pictures[i]
    
}
document.getElementById("main-picture").src=currentProduct.pictures[4]

for(let i=0;i<document.getElementsByClassName("button").length;i++)
{
    document.getElementsByClassName("button")[i].onclick=()=>
    {
        currentSize=document.getElementsByClassName("button")[i].innerHTML
    }
}

document.getElementsByClassName("add-to-bag-button")[0].onclick=()=>
{
    
    
    quantity=document.getElementsByClassName("quantity-number")[0].value
    if(quantity<0 || quantity==="")
    {
        alert("Select Valid Quantity")
    }
    else if(currentSize==="")
    {
        alert("Select a size")
    }
    else
    {

        const users = ref(database, 'currentUser');
        onValue(users, (snapshot) => {
            const currentUser = snapshot.val();
            if(currentUser.hasOwnProperty("cart"))
            {
                console.log(currentUser["cart"])
                currentUser.cart.push({product:currentProduct,size:currentSize,quantity:quantity})
            }
            else
            {
                currentUser["cart"]=[{product:currentProduct,size:currentSize,quantity:quantity}]
               
            }
            
            
            updateCurrentUser(currentUser)
            updateUser(currentUser.username,currentUser)
            alert("Item added successfully")
            
          
        }
        ,{
            onlyOnce: true
        })      
        
    }   
}






    }
    ,{
        onlyOnce: true
    });
}

getCurrentItemFireBase()





