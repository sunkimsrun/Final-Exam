function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched! Student Name: SUN KIMSRUN'), 1000);
    });
}

async function fetchAndProcessData(){
    try {
        console.log('Student Name: SUN KIMSRUN');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed =  string = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
