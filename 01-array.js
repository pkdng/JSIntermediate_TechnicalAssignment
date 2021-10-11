// //Soal - 01
// const arr = [1, 2, 3];
// const arr2 = [8, 1, 5, 7];
// function reverse(array) {
//     return [...array].reverse();
// }

// const newArr = reverse(arr);
// const newArr2 = reverse(arr2);

// console.log(arr, newArr);
// console.log(arr2, newArr2);


// //Soal - 02
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(array) {
//     let total = 0;
//     let totalElement = 0;

//     array.forEach(element => {
//         total+=element;
//     });
//     const average = total / array.length;

//     array.forEach(element => {
//         if (element > average) totalElement++
//     });
//     return totalElement;
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))


//Soal - 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, num) {
      var newArray = [].concat(...array);
      var search = newArray.indexOf(num);

      if (search < 0) return null;
      else return search;
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));