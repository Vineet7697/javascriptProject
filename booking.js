let FetchData=async()=>{
    let url='http://localhost:3000/Dr-Appointment'
    let res=await fetch(url)
    let data=await res.json()
    datashow(data)
}
let searchin=async()=>{
    let search=document.querySelector("#search").value.toLowerCase()
    let url='http://localhost:3000/Dr-Appointment'
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    let FilterData=data.filter((e)=>{
        return e.Doctorname.toLowerCase().includes(search)
    })
    datashow(FilterData)
}
let datashow=(data)=>{
let Show=document.querySelector("#dataShow")
Show.innerHTML=""

data.map((e)=>{
    Show.innerHTML+=`
    <tr>
        <td>${e.Name}</td>
        <td>${e.Age}</td>
        <td>${e.Phonenumber}</td>
        <td>${e.Date}</td>
        <td>${e.Time}</td>
        <td>${e.Doctorname}</td>
        <td onclick="formopen('${e.id}')">Update</td>
        <td onclick="Del('${e.id}')">Delete</td>
        </tr>
    
    
    `
})
}

let Del=async(id)=>{
let url=`http://localhost:3000/Dr-Appointment/${id}`
await fetch(url,{method:"DELETE"})
FetchData()
}

let Ins=()=>{
    let name=document.querySelector("#name").value
    let age=document.querySelector("#age").value
    let Number=document.querySelector("#number").value
    let date=document.querySelector("#date").value
    let time=document.querySelector("#time").value
    let doctor=document.querySelector("#doctor").value
  
if (!name || !age || !Number || !date || time === "Select time slot" || doctor === "Select a Doctor") {
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
        Age:age,
        Phonenumber:Number,
        Date:date,
        Time:time,
        Doctorname:doctor
    })
})
location.href="/table.html"
return false


}


// form open 

let formopen=async(id)=>{
    let url=`http://localhost:3000/Dr-Appointment/${id}`
    let res =await fetch(url,{method:"GET"})
    let data=await res.json()

    let FormData=`
     <div class="form-row">
     <div>
     Full Name <br>
    <input type="text"  id="upname"  value="${data.Name}" placeholder="Enter your full name"></div>
  <div>
    Age <br>
    <input type="text"  id="upage" value="${data.Age}" placeholder="Enter your age">
  </div>
   </div>
    <br>
    <div class="form-row">
    Phone Number <br>
    <input type="tel"  id="upNumber" value="${data.Phonenumber}" placeholder="Enter your phone number">
    </div>
   <div>
    Preferred Date <br>
    <input type="date" id="update" value="${data.Date}" placeholder="dd-mm-yyyy">
   </div>
    </div>
    <br>
    <div class="form-row">
   <div class="form-group">
    Preferred Time <br>
    <select  id="uptime">
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
        <input type="Submit" value="update Appointment" class="submit-btn" onclick="return updateData('${data.id}')">
    
    
    
    `
    document.querySelector("#updateForm").innerHTML=FormData
}

let updateData=async(id)=>{
    let name=document.querySelector("#upname").value
    let age=document.querySelector("#upage").value
    let Number=document.querySelector("#upNumber").value
    let date=document.querySelector("#update").value
    let time=document.querySelector("#uptime").value
    let doctor=document.querySelector("#updoctor").value

    let url=`http://localhost:3000/Dr-Appointment/${id}`


    await fetch(url,{
        method:"PUT",
        headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        Name:name,
        Age:age,
        Phonenumber:Number,
        Date:date,
        Time:time,
        Doctorname:doctor
    })
})
location.href="/table.html"
return false
}
