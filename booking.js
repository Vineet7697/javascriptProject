let FetchData=async()=>{
    let url='http://localhost:3000/Dr-Appointment'
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data)

let Show=document.querySelector("#showdata")
data.map((e)=>{
    Show.innerHTML+=`
    <tr>
        <td>${e.Name}</td>
        <td>${e.Email}</td>
        <td>${e.Phonenumber}</td>
        <td>${e.Date}</td>
        <td>${e.Time}</td>
        <td>${e.Doctorname}</td>
        <td onclick="Update('${e.id}')">Update</td>
        <td onclick="Del('${e.id}')">Delete</td>
        </tr>
    
    
    `
})
}
let Update=(id)=>{
let url=`http://localhost:3000/Dr-Appointment/${id}`
fetch(url,{method:"UPDATE"})
}

let Del=(id)=>{
let url=`http://localhost:3000/Dr-Appointment/${id}`
fetch(url,{method:"DELETE"})
}

let Ins=()=>{
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let Number=document.querySelector("#number").value
    let date=document.querySelector("#date").value
    let time=document.querySelector("#time").value
    let doctor=document.querySelector("#doctor").value
  
if (!name || !email || !number || !date || time === "Select time slot" || doctor === "Select a Doctor") {
    alert("Please fill in all required fields.");
    return false;
  }

let url='http://localhost:3000/Dr-Appointment'

fetch(url,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        Name:name,
        Email:email,
        Phonenumber:Number,
        Date:date,
        Time:time,
        Doctorname:doctor
    })
})
location.href="/table.html"
return false


}


FetchData()

// form open 

let formopen=async(id)=>{
    let url=`http://localhost:3000/Dr-Appointment/${id}`
    let res =await fetch(url,{method:"GET"})
    let data=await res.json()

    let FormData=`
     <div class="form-row">
     <div>
     Full Name <br>
    <input type="text"  id="upname"  value="${data.name}" placeholder="Enter your full name"></div>
  <div>
    Email Address <br>
    <input type="text"  id="upemail" value="${data.email}" placeholder="Enter your email">
  </div>
   </div>
    <br>
    <div class="form-row">
    Phone Number <br>
    <input type="tel"  id="upNumber" value="${data.number}" placeholder="Enter your phone number">
    </div>
   <div>
    Preferred Date <br>
    <input type="date" id="update" value="${data.date}" placeholder="dd-mm-yyyy">
   </div>
    </div>
    <br>
    <div class="form-row">
   <div class="form-group">
    Preferred Time <br>
    <select  id="update">
        <option selected>Select time slot</option>
        <option>10:00 AM - 12:00 AM</option>
        <option>01:00 PM - 03:00 PM</option>
        <option>03:00PM - 06:00PM</option>
        <option>07:00PM - 09:00PM</option>
    </select>
   </div>
    
   <div class="form-group" >
     Choose Doctor <br>
    <select  id="updoctor">
        <option selected>Select a Doctor</option>
        <option>Dr. Prashant Patel</option>
        <option>Dr. Tushar</option>
        <option>Dr. Arvind</option>
        <option>Dr. Rohit</option>
    </select>
   </div>
    </div>
    <br>
   <div class="full-width">
    Reason for Visit <br>
    <textarea id="message" placeholder="briefly describe your symtoms or reason for the appiontment"></textarea>
   </div>
   <br>
        <input type="Submit" value="update Appointment" class="submit-btn" onclick="return updatedata('${data.id}')">
    
    
    
    `
}

let updateData=(id)=>{
    let name=document.querySelector("#upname").value
    let email=document.querySelector("#upemail").value
    let Number=document.querySelector("#upnumber").value
    let date=document.querySelector("#update").value
    let time=document.querySelector("#uptime").value
    let doctor=document.querySelector("#updoctor").value

    let url=`http://localhost:3000/Dr-Appointment/${id}`


    fetch(url,{
        method:"PUT",
        headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        Name:name,
        Email:email,
        Phonenumber:Number,
        Date:date,
        Time:time,
        Doctorname:doctor
    })
})
location.href="/table.html"
return false
}