async function getUsers(endpoint) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}`)
        const datos = peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}
async function postUsers(obj,endpoint) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(obj)
        })
        const datos = peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}
async function deleteUsers(endpoint,id) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })
        const datos = peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}
export {postUsers,getUsers,deleteUsers}