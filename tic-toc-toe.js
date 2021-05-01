// // array prototypeing

// function Animal(type,name){
//     // this.type=type;
//     // this.name=name;
//     this.func = ()=>{
//         console.log(type,name);
//     }
// }
 
// const obj = new Animal("mamal","Linon")

// obj.func();
class TicTacToe{
    constructor(){
        this.playCells=new Array(3).fill(0);
    }
}