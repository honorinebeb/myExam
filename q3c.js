function removeDuplicates(arr) {
    const MyArr = [];
    for (const num of arr) {
      if (!MyArr.includes(num)) {
        MyArr.push(num);
      }
    }
    return MyArr;
  }
  
