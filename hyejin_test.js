//함수 선언종류

function basicFunc() {
    console.log("나는 일반함수")
}

basicFunc();

let addFuc = function () {

}



// 즉시실행함수
(function() {
    console.log('즉시실행함수 호출'); // "함수 호출" 출력
}());


//콜백함수예제

function buy_asis(item, price, quantity,callback) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요합니다.");
    setTimeout(function() {
        var total = price*quantity;
        callback(total);
        return total; 
    }, 1000);
}

// function pay(tot) {
//     console.log(tot + "원을 지불하였습니다.");
// }


var tot = buy_asis("고구마", 1000, 5,function(tot){
    //원래는 setTimeout(비동기 방식)으로 인해서
    //tot의 return ===total값이 undefined로 찍혔어야 하지만.
    //return 값을 그대로 undefined이지만
    //callback함수에 들어온 매개변수(tot)로 인해서 정상처리가됨.
    console.log(tot + "원을 지불하셨습니다.")
});
// pay(tot);

console.log(tot); //undefined