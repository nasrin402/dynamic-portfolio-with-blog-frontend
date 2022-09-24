export const formatePost = (data) =>{
    return {
        id: data.id,
        ...data.attributes
    }
}