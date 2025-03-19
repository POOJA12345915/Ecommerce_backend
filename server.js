const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartRouter = require('./routes/cartRoutes');

const app=express();
const allowedOrigins=["ecommerce-frontend-ig4broka5-pooja-giriyannanavars-projects.vercel.app,ecommerce-frontend-eta-five.vercel.app"]
]
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))

app.use(express.json())
app.use("/auth",router)
app.use("/cart",cartRouter)

connectDB()
app.get('/',(req,res)=>{
    res.send("Hello!,World")
})
const port=5000
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
    
})