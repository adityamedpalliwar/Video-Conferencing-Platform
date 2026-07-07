import express from "express";
import {createServer} from "node:http";//connectes the Express server with Socket.io Server

import {Server} from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

const app=express();
const server=createServer(app);//basically connecting App instances with Create Server of Socket==> app added in Create Server
const io=new Server(server);//Adding socket Server in Create server

// to on server
app.set("port",(process.env.PORT||8000));

app.get("/home",(req,res)=>{//app server
    return res.json({"hello":"World"});
})

const start =async()=>{

    server.listen(app.get("port"),()=>{
        console.log("LISTENIN IN PORT 8000");
    });//app.listen Will automatically listen it.
}

start();