import { Router } from "express";





const router = Router();
let product =[{ nombre: "remera", precio: "200",id:1}, {nombre:"pantalon", precio:"400", id: 2 }]


router.get('/productos', (req,res)=>{
    res.send(product)
})

router.get('/productos/:id',(req,res)=>{
    product.forEach(p=>{
        if(p.id==req.params.id){
            console.log(p.nombre)
        } 
        })
    })


router.post('/productos', (req,res)=>{
    let newP = req.body
    product.push(newP)
    res.send({status: "success", message: "aded"})
    res.send(console.log(product))
})


router.put('/productos/:id',(req,res)=>{

})

router.delete('/productos/:id',(req,res)=>{
    let newArray = product.filter((e)=>e.id != req.params.id)
    console.log(newArray)
         
})



export default router