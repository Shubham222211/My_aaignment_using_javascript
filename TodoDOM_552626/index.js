let taskinp=document.getElementById("task")
let prior=document.getElementById("priority")
let myform=document.querySelector("form")
let tbody=document.querySelector("tbody")

let arr=[]
myform.addEventListener("submit",function(e){
e.preventDefault()

let data={
task:taskinp.value,
priority:priority.value
}
arr.push(data)

tbody.innerHTML=""
for(let i=0;i<arr.length;i++){
let tr=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")

td1.innerText=arr[i].task
td2.innerText=arr[i].priority

tbody.append(tr)
tr.append(td1,td2)
}
})