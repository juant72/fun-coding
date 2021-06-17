function display_all_cubes(items) {
    items.forEach(function (item) {
        var result = Math.pow(item, 3);
        console.log(result);
    });
}
var inputsLC = [2, 3, 4, 5, 6, 7];
display_all_cubes(inputsLC);
