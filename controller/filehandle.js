

exports.uploadImages = async(req,res)=>{
    try{
        if(!req.file)
        {
            return res.status(401).json({
                message:"file not uploaded",
                "response":req.file
            })
        }

         res.status(200).json({
            message:"image uploaded successfully",
            "response":req.file
        })
    }catch(e)
    {
        return res.status(500).json({
            message:"something went wrong",
            error:e.message
        })
    }
}