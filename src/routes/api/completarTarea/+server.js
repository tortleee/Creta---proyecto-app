import pkg from "pg"
let {Pool} = pkg

let pool = new Pool ({
    user : "postgres", 
    host : "localhost", 
    database : "postgres",
    password : "Uno1dos2tres3",
    port: 5432

})



export async function POST ({request}) { 
    let data = await request.json ()
    console.log (data)
    let client = await pool.connect ()
    let putquery = `UPDATE tareas SET completado = $1 WHERE id = $2` 
    let values = [data.completado, data.id]
    let result = client.query(putquery, values)
    client.release () 
    return new Response ("todo bien", {status: 200})
}