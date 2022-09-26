export const getUserData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return result
}


export const getSUM = (method ) => {
/// furqan
    const name = method.filter('furqan')
    console.log(name)
    
}