/*
    let & const I

*/

function f(){
    i=10;
    var j = 20;

    console.log(j);
}

f();
console.log(i); // 전역 존재
//console.log(j); // 함수 안 존재

// let의 블록 범위
try{
    if(true){
        var i =0;
        let j=0;
        j=20;   
    }

    console.log(i);
    console.log(j);
} catch(e){
    console.error('error: '+e);
}




