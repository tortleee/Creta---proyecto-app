import pkg from "pg"
let {Pool} = pkg

let pool = new Pool ({
    user : "postgres", 
    host : "localhost", 
    database : "postgres",
    password : "Uno1dos2tres3",
    port: 5432

})



export async function POST({request}) { 
    let data = await request.json ()
    console.log (data)
    let client = await pool.connect ()
    let insertquery = `insert into tareas(nombre_tarea,completado) values($1,$2)` 
    let values = [data.nombre_tarea, data.completado]
    let result = client.query(insertquery, values)
    client.release () 
    return new Response ("tobo bien", {status: 200})
}