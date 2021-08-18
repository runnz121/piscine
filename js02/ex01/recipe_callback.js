function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

const first = (callback) => {
    console.log('반죽 만들기');
    if(randomFail() == false){
        setTimeout(second,3000);
    }else{
        randomFail();
        first();
    }
};

const second = (callback) => {
    console.log('1차 발효');
    if(randomFail() !== Error){
        setTimeout(third,3000);
    }else{
        randomFail();
        first();
    }
};

const third = (callback) => {
    console.log('성형 하기');
    if(randomFail() !== Error){
        setTimeout(forth,3000);
    }else{
        randomFail();
        first();
    }
};

const forth = (callback) => {
    console.log('2차 발효');
    if(randomFail() !== Error){
        setTimeout(fith,3000);
    }else{
        randomFail();
        first();
    }
}

const fith= (callback) => {
    console.log('튀기기');
}

setTimeout(first,500);