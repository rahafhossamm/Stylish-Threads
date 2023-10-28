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


export let getCurrentUser=()=>
{
    const users = ref(database, 'currentUser/');
    onValue(users, (snapshot) => {
    const userObject = snapshot.val();
 
    let cartContainer=document.getElementsByClassName("cart-container")[0]
    let total=0
    for(let i=0;i<userObject.cart.length;i++)
    {
        total+= userObject.cart[i].product.price *Number(userObject.cart[i].quantity)
        let newDiv=document.createElement("div")
        console.log(userObject.cart[i].product.price ,Number(userObject.cart[i].quantity))
        newDiv.innerHTML=`
        <ul>
        <li>
            <ul class="inner-list">
                <li>
                        <div class="card-container">
                        <div class="card-image"><img src="${userObject.cart[i].product.pictures[3]}" alt=""></div>
                        <div class="col">
                            <div class="item-name">${userObject.cart[i].product.productName}</div>
                            <div class="item-price">${userObject.cart[i].product.price}</div>
                        </div>
                    </div>
                </li>
                <li><input type="text" name="" id="" value=${userObject.cart[i].quantity}></li>
                <li>${ userObject.cart[i].product.price *Number(userObject.cart[i].quantity)}$</li>
            </ul>
        </li>
        <li>
        `
        cartContainer.appendChild(newDiv)
    
    
        
    }
    let subTotal=document.getElementsByClassName("subtotal")[0]
    subTotal.innerHTML=`Subtotal: ${total}`
    



    },
    {
        onlyOnce: true
    });

}
getCurrentUser()


