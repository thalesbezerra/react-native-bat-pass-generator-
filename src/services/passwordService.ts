export default function generatePass(){
    let password: string = ''
    let characters: string = 'Aa@$#1234567890abcdefghijFGHIJKLMNOPQRSTUVXZ!*&'
    let passWordLength = 8

    for(let index=0; index<passWordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}