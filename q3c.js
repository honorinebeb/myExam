function removeDuplicates(arr) {
    const uniqueArr = [];
    for (const num of arr) {
      if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
      }
    }
    return uniqueArr;
  }
  
