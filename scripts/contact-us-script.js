sendButton=document.getElementsByClassName("button")[0]
nameInput=document.getElementsByClassName("input")[0]
emailInput=document.getElementsByClassName("input")[1]
phoneInput=document.getElementsByClassName("input")[2]
subjectInput=document.getElementsByClassName("input")[3]
messageInput=document.getElementsByClassName("input")[4]

nameFlag=false
emailFlag=false
phoneFlag=false
subjectFlag=false
messageFlag=false

regexName=/^[a-z ,.'-]+$/i
regexEmail = /^[a-zA-Z0-9_\.]{2,}@[a-zA-Z]+.[a-zA-Z]+$/
regexPhone= /^(\+\d{0,3}[- ]?)?\d{11}$/
sendButton.onclick=()=>{

    if(!regexName.test(nameInput.value))
    {
        alert("Enter a valid name")
        nameFlag=false
    }
    else
    {
        nameFlag=true
    }
    if(!regexEmail.test(emailInput.value))
    {
        alert("Enter a valid email")
        emailFlag=false
    }
    else
    {
        emailFlag=true
    }
    if(!regexPhone.test(phoneInput.value))
    {
        alert("Enter a valid phone number")
        phoneFlag=false
    }
    else
    {
        phoneFlag=true
    }
    if(subjectInput.value==="")
    {
        alert("Enter a subject")
        subjectFlag=false
    }
    else
    {
        subjectFlag=true
    }
    if(messageInput.value==="")
    {
        alert("Enter a message")
        messageFlag=false
    }
    else
    {
        messageFlag=true
    }

    if(nameFlag&&emailFlag&&phoneFlag&&messageFlag&&subjectFlag)
    {
        alert("Message was sent Successfully")
    }

}