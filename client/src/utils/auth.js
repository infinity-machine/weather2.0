import decode from 'jwt-decode';

export function hasToken() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const decoded = decode(token);
    if (decoded.exp > Date.now() / 1000) return decoded.data;
    return false;
}

export async function registerUser(user_to_register) {
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
        return token;
    };
    if (response.status!== 200) {
        throw new Error('ACCOUNT CREATION FAILED');
    }
}