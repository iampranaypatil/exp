//import library
const express=require("express");
const router=express.Router();
const connection=require('../db/dbconnect')


//get all employee
router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    });
});


//get employee by id
router.get("/employees/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data[0]);
        }
    });
});


//insert new employee
router.post("/employees/employee/:eid",(req,resp)=>{
  var empid=req.body.empid;
  var ename=req.body.ename;
  var sal=req.body.sal;

  connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
    if(err){
        resp.status(500).send("data not inserted");
    }
    else{
        if(result.affectedRows> 0)
           resp.send("{'msg':'inserted successfully'}");
        elses
        resp.send("{'msg':'not inserted '}");
    }
  });
});


//update employee
router.put("/employees/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;

    connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,result)=>{
      console.log(result);
      if(err){
          resp.status(500).send("data not updated");
      }
      else{
        if(result.affectedRows> 0)
        resp.send("{'msg':'update successfully'}");
     else
     resp.send("{'msg':'not updated '}");
      }
    })
  })

  //delete employee
  router.delete("/employees/employee/:eid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.eid],(err,result)=>{
      console.log(result);
      if(err){
          resp.status(500).send("data not deleted");
      }
      else{
        if(result.affectedRows> 0)
        resp.send("{'msg':'deleted successfully'}");
     else
     resp.status(500).send("{'msg':'not deleted '}");
      }
    })
  })

//export module
module.exports=router;