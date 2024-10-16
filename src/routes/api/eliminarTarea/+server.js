import pkg from "pg"
let {Pool} = pkg

let pool = new Pool ({
    user : "postgres", 
    host : "localhost", 
    database : "postgres",
    password : "Uno1dos2tres3",
    port: 5432

})



export async function DELETE ({request}) { 
    let data = await request.json ()
    console.log (data)
    let client = await pool.connect ()
    let deletequery = `delete from tareas where id = $1` 
    let values = [data.id]
    let result = client.query(deletequery, values)
    client.release () 
    return new Response ("todo bien", {status: 200})
}