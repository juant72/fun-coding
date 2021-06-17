function display_all_cubes(items : number[]){
    items.forEach(item => {
        var result=Math.pow(item, 3);
        console.log(result);        
    });
}

let inputsLC: number[]=[2,3,4,5,6,7];
display_all_cubes(inputsLC);



