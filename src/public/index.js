let formulario = document.getElementById('formulario')


const submit = (e,form,route) => {
    e.preventDefault();
    let data = new FormData(form)
    let obj = {};
    data.forEach((value,key)=>obj[key]=value)
    fetch(route, {
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "content-Type":"application/json",
        }
    }).then(res=>res.json()).then(json=>(console.log(json)))
}


formulario.addEventListener("submit", (e)=>submit(e, e.target,'api/productos'))


