import { CheckUsers ,getCurrentUser, users} from "./users.js";
import { getCurrentItem, getUsers, insertCurrentItem, insertMenProducts, insertUsers, insertWomenProducts, updateUser } from "./firebase.js";
import { menProducts, womenProducts } from "./products.js";
let usernameInput=document.getElementsByClassName("input")[0]
let passwordInput=document.getElementsByClassName("input")[1]

let loginButton=document.getElementsByClassName("button")[0]



loginButton.onclick=()=>{
    let username=usernameInput.value
    let password=passwordInput.value 
    
         
   getUsers(username,password)    
}