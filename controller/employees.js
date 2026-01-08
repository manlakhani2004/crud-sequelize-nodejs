

const Employees = require('../model/employee')

//get all employees
exports.GetAllEmployees = async(req,res)=>{
    try{
        const emp = await Employees.findAll()
        // console.log(emp);
        
        res.status(200).json({
            "message":" fetch all record succesfully",
            "response":emp
        })

    }catch(e)
    {
        return res.status(500).json({
            "message":"something went wrong",
            "error":e.message
        })
    }
} 

//create employee
exports.createEmployee = async(req,res)=>{
    const{name,department,salary} = req.body;
    try{
        const emp = await Employees.create({name,department,salary})
        console.log(emp);
    
        res.status(200).json({
            "message":"record inserted succesfully",
            "response":emp
        })

    }catch(e)
    {
        return res.status(500).json({
            "message":"something went wrong",
            "error":e.message
        })
    }
} 

//delete employee
exports.DeleteEmployee = async(req,res)=>{
    const id = req.params["id"];
    try{
        const emp = await Employees.destroy({where:{id}})
        console.log(emp);
    
        res.status(200).json({
            "message":"record deleted succesfully",
            "response":emp
        })

    }catch(e)
    {
        return res.status(500).json({
            "message":"something went wrong",
            "error":e.message
        })
    }
} 

//upadate employee
exports.EditEmployee = async(req,res)=>{
    const id = req.params["id"];
    const{name,department,salary} = req.body;
    try{
        const emp = await Employees.update({name,department,salary},{where:{id}})
        console.log(emp);
    
        res.status(200).json({
            "message":"record updated succesfully",
            "response":emp
        })

    }catch(e)
    {
        return res.status(500).json({
            "message":"something went wrong",
            "error":e.message
        })
    }
} 
