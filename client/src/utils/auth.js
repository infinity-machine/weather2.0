// import decode from 'jwt-decode';

export default async function registerUser(user_to_register) {
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_to_register)
    });
    if (response.status === 200) {
        const token = await response.json();
        console.log(token);
    };
    if (response.status!== 200) {
        throw new Error('ACCOUNT CREATION FAILED');
    }
}