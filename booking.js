let FetchData=async()=>{
    let url='http://localhost:3000/Dr-Appointment'
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data)

let Show=document.querySelector("#showdata")
data.map((e)=>{
    Show.innerHTML+=`
    <tr>
        <td>${e.name}</td>
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
FetchData()