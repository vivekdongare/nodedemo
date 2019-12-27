express=require("express");
app=express();
app.use(function(req,resp,next){
	console.log("url:"+req.url)
	next();
});
app.use(function(req,resp,next){
	console.log("Method:"+req.method)
	next();
});

app.get("/",function(req,resp){
     resp.send("<h1>Hello world!!</h1>");
});
app.get("/about",function(req,resp){
     resp.send("<h1>about us</h1>");
});

app.listen(3000);