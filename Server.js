const express=require('express')
const PORT = 8899
const app=express()

app.set(express.json())
app.set(express.urlencoded({extended:false}))
app.set(express.static('public'))
app.get('/',(req,res)=>{

})
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`Work on PORT ${PORT}`)
})