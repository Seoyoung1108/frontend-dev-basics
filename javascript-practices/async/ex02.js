/*
    promise 지원 비동기 함수 사용 I: ~ then ~ catch 
*/

const {fn02} = require('./fns');

// test success
fn02('params~~')
    .then((result)=>{
        console.log(`result:${result}`);
    })
    .catch((e)=>{
        console.error(e);
    });

// test fail
fn02(null)
    .then((result)=>{
        console.log(`result:${result}`);
    })
    .catch((e)=>{
        console.error(e);
    });
    
console.log('wait...');