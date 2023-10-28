import { womenProducts } from "./products.js";
import { insertCurrentItem, insertWomenProducts } from "./firebase.js";
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

export let getWomenProducts=()=>
{
    const womenProducts = ref(database, 'womenProducts');
    onValue(womenProducts, (snapshot) => {
    const data = snapshot.val();
    
    
    Object.keys(data).forEach(function(key) {

    let newDiv=document.createElement("div")
    newDiv.innerHTML=`
        <div class="content-card">
            <div class="content image">
                <img src="${data[key].pictures[0]}" alt="">
            </div>
            <div class="name">${data[key].productName}</div>
            <div class="price">${data[key].price}</div>
            </div>

        </div>
    `
    newDiv.onclick=()=>
    {
        insertCurrentItem(data[key])
        
        location.href="http://127.0.0.1:5501/product-details.html"
    }
    let mainContinerDiv=document.getElementsByClassName("main-container")[0]
    mainContinerDiv.append(newDiv)
      
    });
   
  
 
    });

}
getWomenProducts()

