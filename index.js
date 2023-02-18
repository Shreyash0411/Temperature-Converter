let cel = document.getElementById("cel");
let farah = document.getElementById("farah");

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c*9/5)+32;
    if(!Number.isInteger(f))
            f = f.toFixed(4); 
    farah.value = f;
});

farah.addEventListener('input',function(){
    let f = this.value;
    let c = ((f-32)*5)/9;
    if(!Number.isInteger(c))
            c = c.toFixed(4); 
    cel.value = c;
});