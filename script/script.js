console.log("script js added");

document.getElementById('buttonPositive').addEventListener('click', function () {
    let value = parseInt(document.getElementById('value').innerText);
    // console.log(value, typeof value);
    value+=1;
    const store = document.getElementById('value');
    store.innerText = value;
})
document.getElementById('buttonNegative').addEventListener('click', function () {
    let value = parseInt(document.getElementById('value').innerText);
    // console.log(value, typeof value);
    value-=1;
    const store = document.getElementById('value');
    store.innerText = value;
})

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('value').innerText = 0;
})