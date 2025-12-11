// Native fetch is available in Node 18+

async function test() {
    try {
        const res = await fetch('http://127.0.0.1:5000/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: 'Node',
                lastName: 'Test',
                email: 'node@test.com',
                password: 'password123'
            })
        });
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(err);
    }
}
test();
