export async function ApiPostMethodWithToken(url, data, token, method = 'POST') {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };

    if (method === 'POST' || method === 'PUT') {
        requestOptions.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}
