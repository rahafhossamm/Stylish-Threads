import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getDatabase,ref,set,child,update,remove,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { insertUsers } from "./firebase.js";
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



let firstNameInput=document.getElementsByClassName("input")[0]
let lastNameInput=document.getElementsByClassName("input")[1]
let usernameInput=document.getElementsByClassName("input")[2]
let emailInput=document.getElementsByClassName("input")[3]
let passwordInput=document.getElementsByClassName("input")[4]
let signUpButton=document.getElementsByClassName("button")[0]

let firstNameFlag=false
let lastNameFlag=false
let usernameFlag=false
let emailFlag=false
let passowrdFlag=false
let regexName=/^[a-z ,.'-]+$/i
let regexEmail = /^[a-zA-Z0-9_\.]{2,}@[a-zA-Z]+.[a-zA-Z]+$/




signUpButton.onclick=()=>
{
    if(!regexName.test(firstNameInput.value))
    {
        alert("Enter a valid First Name")
        firstNameFlag=false
    }
    else
    {
        firstNameFlag=true
    }
    if(!regexName.test(lastNameInput.value))
    {
        alert("Enter a valid Last Name")
        lastNameFlag=false
    }
    else
    {
        lastNameFlag=true
    }
    if(!regexEmail.test(emailInput.value))
    {
        alert("Enter a valid Email")
        emailFlag=false
    }
    else
    {
        emailFlag=true
    }
    if(usernameInput.value==="")
    {
        alert("Enter a valid username")
    }
    else
    {
        usernameFlag=true
    }
    if(passwordInput.value==="")
    {
        alert("enter a valid password")
    }
    else
    {
        passowrdFlag=true
    }

    if(firstNameFlag&&lastNameFlag&&emailFlag&&passowrdFlag&&usernameFlag)
    {
         
                
                    const users = ref(database, 'users/');
                    onValue(users, (snapshot) => {
                    const data = snapshot.val();
                    let flag=0
                    Object.keys(data).forEach(function(key) 
                    {
                    if(data[key].username===usernameInput.value)
                    {
                        alert("Username is already taken")
                        console.log("aaa")
                        flag =1
                    }
                });
                if(flag===0)
                {
                    alert("register successfully")
                    alert("sign in to shop")
                  insertUsers({
                        firstName:firstNameInput.value,
                        lastName:lastNameInput.value,
                        email:emailInput.value,
                        username:usernameInput.value,
                        password:passwordInput.value,
                    })
                    location.href="http://127.0.0.1:5501/home.html"
                }
            });
        }

        
    
}


print(database)

