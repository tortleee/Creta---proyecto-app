import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Uno1dos2tres3',
    port: 5432
})

export async function GET() {
    let client = await pool.connect()
    let query = 'SELECT * FROM tareas order by id' 
    let result = await client.query(query)
    console.log(result.rows)

    return new Response(JSON.stringify(result.rows), {status: 200})
}
