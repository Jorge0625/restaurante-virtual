async function getPlatillos(endpoint) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}`)
        const datos = peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}
async function postPlatillos(obj,endpoint) {
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
async function deletePlatillos(endpoint,id) {
    try {
        const peticion = await fetch(`http://localhost:3000/${endpoint}/${id}`,{
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


//////////////LLAMADO UPDATE/////////////


async function patchPlatillos(obj,endpoint,id) 
{
    try {
     
  
        const response = await fetch(`http://localhost:3000/${endpoint}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}
export {postPlatillos,getPlatillos,deletePlatillos,patchPlatillos}