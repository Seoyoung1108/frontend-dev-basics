/*
    Array 확장(prototype 기반의 확장)
    
    ex) List 함수 지원하기

*/

Array.prototype.remove = function(index){
    this.splice(index,1);
}

Array.prototype.insert = function(index,value){
    if(value instanceof Array){
        
        // 기본
        /*
        for(var i=0; i<value.length; i++){
            this.splice(index+i,0,value[i]);
        }
        */

        // 오류!
        // 콜백 함수에서의 this는 어휘상의 this와 일치X
        /*
        value.forEach(function(e){
            this,splice(index++,0,e);
        });
        */

        // 해결방법1
        var _this = this;
        value.forEach(function(e){
            _this.splice(index++,0,e);
        });

        // 해결방법2
        value.forEach(function(e){
            this.splice(index++,0,e);
        }.bind(this)); // 함수 호출 때 this 세팅
        
    } else{
        this.splice(index,0,value);
    }
}

Array.prototype.forEach = function(callback){
    for(var i=0; i<this.length; i++){
        callback(this[i]);
    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a); // [1, 2, 'a', 'b', 'c', 4]

global.i =10;
console.log(global.i,i);
console.log(global.parseInt('10'));
