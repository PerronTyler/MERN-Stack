function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var pivot = arr[0];
    
    var left_pivot = []; 
    var right_pivot = [];

    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left_pivot.push(arr[i]) : right_pivot.push(arr[i]);
    }

    return quicksort(left_pivot).concat(pivot, quicksort(right_pivot));
}
