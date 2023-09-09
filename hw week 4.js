// untuk menghasilkan nilai acak antara 1 dan 50
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // untuk mengisi array dengan nilai acak
  function fillArrayWithRandomValues(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(getRandomValue());
    }
    return arr;
  }
  
  //  untuk membagi array menjadi array genap dan ganjil
  function splitArrayIntoEvenAndOdd(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  //  untuk menghitung nilai minimum
  function calculateMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // untuk menghitung nilai maksimum
  function calculateMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // untuk menghitung total
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // untuk menghitung rata-rata
  function calculateAverage(arr) {
    const total = calculateTotal(arr);
    return total / arr.length;
  }
  
  // array dengan 100 nilai acak
  const randomArray = fillArrayWithRandomValues(100);
  
  // array menjadi array genap dan ganjil
  const [evenArray, oddArray] = splitArrayIntoEvenAndOdd(randomArray);
  
  // Menghitung min, max, total, dan rata-rata dari masing-masing array
  const minEven = calculateMin(evenArray);
  const maxEven = calculateMax(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = calculateMin(oddArray);
  const maxOdd = calculateMax(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  // Membandingkan nilai-nilai
  const comparisonResult = {
    min: minEven > minOdd ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
    max: maxEven > maxOdd ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
    total: totalEven === totalOdd ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
    average: averageEven > averageOdd ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil",
  };
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:");
  console.log(randomArray);
  console.log("Array genap dengan jumlah index 50:");
  console.log(evenArray);
  console.log("Array ganjil dengan jumlah index 50:");
  console.log(oddArray);
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log(`Min: ${minEven}, Max: ${maxEven}, Total: ${totalEven}, Rata-rata: ${averageEven}`);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log(`Min: ${minOdd}, Max: ${maxOdd}, Total: ${totalOdd}, Rata-rata: ${averageOdd}`);
  console.log("Perbandingan nilai min, max, total, dan rata-rata:");
  console.log(comparisonResult);