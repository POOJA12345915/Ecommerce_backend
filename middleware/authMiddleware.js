const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>

{
    const authHeader=req.header("Authorization")

    if(!authHeader) return res.status(401).json({message:"Invalid Authorization"})

        const token=authHeader.split(" ")[1]
        if(!token) return res.status(401).json({message:"No token provided"})
            try{
              const vertified=jwt.verify(token,process.env.JWT_SECRET)
              req.user=vertified
              next()
            }
            catch(err)
            {
                return res.status(401).json({message:"Inavlid Token"})
            }

}
module.exports=authMiddleware