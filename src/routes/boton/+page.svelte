<script>
    let lista_de_tareas = []

    async function obtenerDatos() {
        alert('Obteniendo información')
        console.log('Mandé una solicitud')
        let response = await fetch('/api/obtenerDatos')
        let datos = await response.json()


        lista_de_tareas = datos
    }
</script>

<button on:click={obtenerDatos}>Obtener datos</button>


{#each lista_de_tareas as tarea}
    {tarea.nombre_tarea}
    {tarea.completado}
{/each}
