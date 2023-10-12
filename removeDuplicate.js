function removingDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(removingDuplicates([1, 4, 5, 8, 1, 5]));
