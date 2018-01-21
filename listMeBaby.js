
module.exports = {
  list: [],
  storeMe: function storeMe (num) {
    this.list.push(num)
    return 0;
  },
  sortMe: function sortMe () {

    //Sorting in ascending order
    this.list.sort(function(a, b) {
      return a - b;
    });

    //Output and return changes after a sort
    console.log(this.list);
    return this.list;
  }
};


