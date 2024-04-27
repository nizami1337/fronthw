let form = document.getElementsByClassName('msg__bottom__bottom')[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fdata = new FormData(form);
    let data = {}
    for (let [key,val] of fdata.entries()) {
        data[key] = val;
    }
    let el = document.createElement('div')
    el.className = 'msg'
    el.innerHTML = `<div class="msg__top"><div class="msg__top__top"><span class="msg__top__top__name">${data['name']}</span><span class="msg__top__top__date">${Date()}</span></div><div class="msg__top__bottom"><p>${data['msg']}</p></div></div><div class="msg__bottom"><p class="msg__bottom__top">Add new message:</p><form class="msg__bottom__bottom"><input type="text" placeholder="Your Name" name="name"><textarea placeholder="Your Message" name="msg"></textarea><input type="submit" value="Send"></form></div>`
    document.getElementsByClassName('msg__container')[0].appendChild(el)
})