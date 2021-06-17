function display_quadratic_complexity(items) {
    items.forEach(function (item) {
        items.forEach(function (internal_item) {
            var result = item * internal_item;
            console.log(result);
        });
    });
}
var inputs = [2, 3, 4, 5, 6, 7];
display_quadratic_complexity(inputs);
