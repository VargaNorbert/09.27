const list=[];

class Zene{

    constructor(cim,hossz){
        this.cim=cim;
        this.hossz=hossz;
    }

}

function hozzaad(){
    let zene=document.getElementById('cim').value;
    let mp=parseInt(document.getElementById('ido').value);

     z = new Zene(zene,mp);

     list.push(z);

     osszeg(list);
}

function init(){
    document.getElementById('gomb').addEventListener('click',hozzaad);

}

document.addEventListener('DOMContentLoaded',init);

function osszeg(list){
    let sum=0;

    for(l of list){
        sum+=l.hossz;
    }



    document.getElementById('ki').textContent=sum;

}
