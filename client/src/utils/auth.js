export default async function registerUser(user_to_register) {
    console.log(user_to_register)
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_to_register)
    });

}