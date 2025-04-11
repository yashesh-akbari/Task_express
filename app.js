import express from "express"
import path from "path"
import fs from "fs"

let app=express();

app.set("view engine","ejs");
app.use(express.static(path.join(import.meta.dirname,"public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  fs.readdir(`./files`,function(err,files){
    res.render("index",{files: files})
  })
})

app.get("/files/:filename",(req,res)=>{
  fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
    res.render("show",{filename: req.params.filename,filedata:filedata});
  })
})

app.get("/edit/:filename",(req,res)=>{
  res.render("edit",{filename:req.params.filename
  })
})

app.post("/edit",(req,res)=>{
  // console.log(req.body);
  fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{res.redirect("/")});
  })

app.post("/create",(req,res)=>{
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join("")}.txt`,req.body.details,(err)=>{
      res.redirect("/")
    })
})

let port=3000;
app.listen(port,(req,res)=>{console.log(`server is running at http://localhost:${port}`);
})

