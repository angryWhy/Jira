module.exports = (request,res,next)=>{
    if(request.method === "POST" &&request.path==="/login"){
        if(request.body.username ==="jack"&&request.body.password ==="123" ){
            return request.status(200).json({
                user:{
                    token:"123"
                }
            })
        }
        else{
            return res.status(400).json({
                message:"输入有误"
            })
        }
    }
}