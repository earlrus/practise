//generators

console.log("hello");

function *gen(){
let i=0;
    while(true){
        yield i++;
        console.log("running...");
        
    }
}

function res(){
    let m=0
    const g=gen();
    for(let i=10;i<1000;i++){

        setTimeout(()=>console.log(g.next()),i*m) 
        m++
    }
}

res()