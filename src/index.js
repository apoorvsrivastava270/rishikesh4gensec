

const waiting = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
}

setTimeout(waiting,3000)

const hoverchangeover = () => {
    document.getElementById("rishi").classList.add("text-white");
    document.getElementById("rishi").classList.remove("text-pink-600");
    document.getElementById("panda").classList.add("text-pink-600");
    document.getElementById("gen").classList.add("text-white");
    document.getElementById("gen").classList.remove("text-pink-600");
    document.getElementById("sec").classList.add("text-pink-600");
}

const hoverchangeout = () => {
    document.getElementById("rishi").classList.remove("text-white");
    document.getElementById("rishi").classList.add("text-pink-600");
    document.getElementById("panda").classList.remove("text-pink-600");
    document.getElementById("gen").classList.remove("text-white");
    document.getElementById("gen").classList.add("text-pink-600");
    document.getElementById("sec").classList.remove("text-pink-600");
}

let j=1;
if(window.innerWidth<768){
    j=1;
}


const burger1 = () => {
    if(j%2==0){
        document.getElementById("menu").classList.add("opacity-100");
        document.getElementById("menu").classList.remove("opacity-0");
    }
    else{
        document.getElementById("menu").classList.remove("opacity-100");
        document.getElementById("menu").classList.add("opacity-0");
    }
}

const burger2 = () =>{
    if(j%2==0){
        document.getElementById("menu").classList.add("hidden");
        document.getElementById("burgimg").classList.remove("rotate-90");
    }
    else{
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("burgimg").classList.add("rotate-90");
    }
    setTimeout(burger1,100);
    j++;
}

const arrowhover = (id) =>{
    document.getElementById(id).classList.add('text-red-500');
}
const arrowhoveroff = (id) =>{
    document.getElementById(id).classList.remove('text-red-500');
}