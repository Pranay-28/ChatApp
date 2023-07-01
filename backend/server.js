const express= require('express');
const connectDB = require("./config/db");
const dotenv= require('dotenv');
const {chats}=require("./data/data");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app=express();


app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API is running succesfully")
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000
const server = app.listen(5000,console.log(`Server has started on PORT ${PORT}`));

const io = require("socket.io")(server, {
    pingTimeout: 6000,
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", () => {
    console.log("connected to socket.io")
});