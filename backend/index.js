import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "customer",
    password: "admin"
})
//won't work without crud workaround you saw in youtube video
app.use(express.json())
app.use(cors())

app.listen(8800, () => {
    console.log("connected to backend !!");
})

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/customers", (req, res) => {
    const q1 = "SELECT * FROM currentac"
    db.query(q1, (err, data) => {
        if (err) {
            return err
        } else {
            return res.json(data)
        }
    })
})

app.post("/customers", (req, res) => {
    const q = "INSERT INTO currentac (`accno`, `name`,  `email`, `gender`, `branch`, `balance`, `rating`) VALUES(?)"
    const body = req.body;
    const values = [body.accno, body.name, body.email, body.gender, body.branch, body.balance, body.rating]
    db.query(q, [values], (err, data) => {
        if (err) return err
        return res.json("successful")
    })
})

app.post("/payments", (req, res) => {
    const q1 = "UPDATE currentac SET balance = balance - 20 where accno = 1002"
    const q2 = "UPDATE currentac SET balance = balance + 20 where accno = 1003"
    const values = []
    // const body = req.body;
    // const values = [body.accno, body.name, body.email, body.gender, body.branch, body.balance, body.rating]
    db.query(q1, [values], (err, data) => {
        if (err) return err
        return res.json("successful")
    })
})


app.delete("/customers:accno", (req, res) => {
    const accno = req.params.accno;
    const q = "DELETE FROM currentac WHERE accno = ?";
    db.query(q, [accno], (err, data) => {
        if (err) return err
        return res.json("sucessful")
    })
    // for (let i = 0; i < keys.length; i++) {
    //     const q = "DELETE FROM currentac WHERE accno = " + keys[i]
    //     db.query(q, (err, data) => {
    //         if (err) return err
    //         // return "data"
    //     })
    // }
})