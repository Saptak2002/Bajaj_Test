import express from "express"

const app = express();

app.use(express.json())


app.post("/bfhl", (req, res)=>{
    const action = req.body.data;
    // console.log(action);
    let al = []
    let nu = []

    action.forEach(e => {
        // console.log(e);
        if((e >= 'A' && e <= 'Z') || (e >= 'a' && e <= 'z')){
            al.push(e);
        }
        else{
            nu.push(e);
        }
    });

    let al2 = al;
    let ne =[];
    al2.sort();
    al2.reverse();
    


    res.status(200).json({
        is_success: true,
        user_id: "saptak_purkait_05052002",
        email : "sp2368@srmist.edu.in",
        roll_number:"RA2011003010778",
        numbers: nu,
        alphabets: al,
        highest_alphabet:(al2.length === 0)?ne:al2[0]

    })
})

app.get("/bfhl", (req, res)=>{

    res.status(200).json({
        operation_code:1
    })
})

const server = app.listen(3300, ()=>{
    console.log("Server working");
})