/*
    let & const II

*/

// 1. const의 블록 범위
try{
    if(true){
        const num=10;
    }
    console.log(num);
} catch(e){
    console.error('error:'+e);
}

// 2. 대입(Assignment) 에러
try{
    const num=20;
    num=30;
} catch(e){
    console.error('error:'+e);
}
