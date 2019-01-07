(function (){})()

function IHaveAName(){}

()=>{}

var obj = {}
obj.value = 3;

value2 = "Global value";

// timerValue = "This is timer!";

class ClassA {
    
    constructor() {
        this.value = "My Value"
        // this.timerValue = "This is timer!";
    }

    func(){
        return function(){
            console.log(value2)
            //console.log(this.value)
        }
    }

    arrowFunc(){
        return ()=>{
            console.log('arrowFunc: ' + this.value)
        }
    }

    timer(){
        const timerValue = "This is timer!";

        setTimeout(function(){
            console.log(`This is regular function: ${timerValue}`)
        }, 50)

        setTimeout(()=>{
            console.log(`This is arrow function: ${timerValue}`)
        }, 50)
    }
}

let a = new ClassA();

let b = a.arrowFunc()
b();

let regularFunc = a.func()
regularFunc();

a.timer();

function getObjRegular() {
    return {
        data:3,
        getData: function(){
            console.log('getObjRegular ' + this.data);
        }
    }
}

function getObjArrow() {
    return {
        data:3,
        getData: ()=>{
            console.log('getObjArrow ' + this.data);
        }
    }
}

getObjRegular().getData();
getObjArrow().getData()
