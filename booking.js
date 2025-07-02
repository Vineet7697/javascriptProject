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
        <td onclick="Del('${e.id}')">Delete</td>
        </tr>
    
    
    `
})
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
        Doctor:doctor
    })
})
location.href="table.html"
return false
}


FetchData()