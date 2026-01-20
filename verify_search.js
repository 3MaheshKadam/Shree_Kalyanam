
const baseUrl = 'http://localhost:3000/api/users/search';

async function test(name, params) {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

    try {
        const res = await fetch(url.toString());
        const data = await res.json();
        console.log(`\n--- Test: ${name} ---`);
        console.log(`URL: ${url.toString()}`);
        console.log(`Status: ${res.status}`);
        console.log(`Success: ${data.success}`);
        if (data.data) {
            console.log(`Count: ${data.data.length}`);
            if (data.data.length > 0) {
                console.log(`First Result: ${data.data[0].name}, ${data.data[0].currentCity}, Age: ${data.data[0].age}`);
            }
        }
        console.log(`Pagination:`, data.pagination);
    } catch (e) {
        console.error(`Test ${name} Failed:`, e.message);
    }
}

async function run() {
    await test('Basic List', { limit: 2 });
    await test('Search "Rahul" (expect results or empty)', { q: 'Rahul' });
    // Assuming there might be some data, if not it will just return empty which is also valid behavior.

    await test('Filter Gender "Female"', { gender: 'Female' });
    await test('Pagination Page 2', { limit: 2, page: 2 });
}

run();
