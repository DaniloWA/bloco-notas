
function temas(){
    let tema = document.getElementsByTagName('html')[0].getAttribute('tema');
    let temaVariavel = document.getElementsByTagName('html')[0]
    let temaTxt = document.getElementById("temaTxt");

    if(tema == "light"){
        temaVariavel.setAttribute("tema", "dark")
        temaTxt.innerHTML = "Dark"
        return
    }

    if(tema == "dark"){
        temaVariavel.setAttribute("tema", "light")
        temaTxt.innerHTML = "Light"
        return
    }
}

