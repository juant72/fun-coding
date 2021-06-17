function display_quadratic_complexity(items: number[]){
    items.forEach(item => {
        items.forEach(internal_item => {
            var result=item*internal_item;
            console.log(result)            
        });
    });
}

let inputs: number[]=[2,3,4,5,6,7];
display_quadratic_complexity(inputs)




