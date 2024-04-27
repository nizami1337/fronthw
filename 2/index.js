let form = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fdata = new FormData(form);
    let data = {}
    for (let [key,val] of fdata.entries()) {
        data[key] = val;
    }
    let box = document.getElementById("box");
    box.style.fontWeight = '400'
    box.style.textDecoration = 'none'
    box.style.fontStyle = 'normal'
    box.style.textAlign = 'left'
    box.innerHTML = data['text']
    if (data['b']) {box.style.fontWeight = 'bold'}
    if (data['u']) {box.style.textDecoration = 'underline'}
    if (data['i']) {box.style.fontStyle = 'italic'}
    if (data['align']) {box.style.textAlign = data['align']}
})