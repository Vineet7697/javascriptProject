let signup=()=>{
    let Name=document.querySelector("#signname").value
    let Email=document.querySelector("#signemail").value
    let Number=document.querySelector("#signnum").value
    let Pass=document.querySelector("#signpass").value
    let Cpass=document.querySelector("#signcpass").value

    if(Name==""){
    document.querySelector("#signname").placeholder="*Please enter name"
        let style = document.createElement('style');
        style.innerHTML = `
            #signname::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       

    return false
    }
    else if(!(Email.includes('@') && Email.includes('.com'))){
        document.querySelector("#signemail").placeholder="*Please enter email"
        let style = document.createElement('style');
        style.innerHTML = `
            #signemail::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
        
        return false;
        }
    if(Number==""){
        document.querySelector("#signnum").placeholder="*Please enter number"
        document.querySelector("#signnum").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signnum::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }
     
    else if(Number.length!=10){
        document.querySelector("#signnum").placeholder="*Please enter 10 digits"
        document.querySelector("#signnum").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signname::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }
      else if(isNaN(Number)){
        document.querySelector("#signnum").placeholder="*Please enter only number"
        document.querySelector("#signnum").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signname::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }
      else if(Pass==""){
        document.querySelector("#signpass").placeholder="*Please enter password"
        document.querySelector("#signpass").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signpass::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }
    else if(Cpass==""){
        document.querySelector("#signcpass").placeholder="*Please enter confirm password"
        document.querySelector("#signcpass").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signcpass::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }
    else if(Pass!=Cpass){
        document.querySelector("#signcpass").placeholder="*please enter same  password"
        document.querySelector("#signcpass").value=""
        document.querySelector("#cpass").value=""
          let style = document.createElement('style');
        style.innerHTML = `
            #signcpass::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        document.querySelector("#cpass").focus()
        return false;
    }
    else if(!(Pass.match(/[1234567890]/) &&
             Pass.match(/[!@#$%^&*()]/) &&
            Pass.match(/[a-z]/) &&
            Pass.match(/[A-Z]/)
        )){
         document.querySelector("#signcpass").placeholder="*please enter strong password";
         document.querySelector("#signcpass").value="";
           let style = document.createElement('style');
        style.innerHTML = `
            #signcpass::placeholder {
                color: red;
            }
        `;
         document.head.appendChild(style);
       
        return false;
    }


    localStorage.setItem("name",Name)
    localStorage.setItem("email",Email)
    localStorage.setItem("number",Number)
    localStorage.setItem("password",Pass)

    location.href="login.html"
    return false
}

let login=()=>{
    let loginname=document.querySelector("#username").value
    let loginpass=document.querySelector("#password").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")

    if(loginname==localname && loginpass==localpass){
        location.href="home.html"
        return false
    }
    else{
        alert("wrong Credentials")
    }
    return false
}