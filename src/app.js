    import express  from "express";
    import apiRouter from "./routes/api.router.js"

    const app = express();

    const server = app.listen(8080, ()=>console.log("Desde puerto 8080"))
    app.use(express.json())
    app.use("/api", apiRouter)
    app.use(express.static("public"))