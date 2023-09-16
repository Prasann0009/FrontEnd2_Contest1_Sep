const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers  
  function printDeveloper() {
    var ans= data.filter(obj => obj.profession==="developer");
  console.log(ans);
  }
  
  // 2. Add Data
  function addData() {
  
  function addemp(name, age, prof) {
    const emp = {
      name: name,
      age: age,
      profession: prof,
    };
    data.push(emp);
  }
  
  const EmpName = prompt("Enter Employee name:");
  const Age = parseInt(prompt("Enter Employee age:"));
  const profession = prompt("Enter Employee Profession:");
  
  addemp(EmpName, Age, profession);
  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
  //   data.splice(data.findIndex(obj => obj.profession === "admin"),1);
  //  console.log(data);
   del = data.filter(e => e.profession === "admin");
  del.forEach(f => data.splice(data.findIndex(e => e.profession === f.name),1));
  console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
  function concatenateArray(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const resultArray = concatenateArray(array1, array2);
  console.log("Concatenated Array:", resultArray);
  
  }
  
  // 5. Average Age
  function averageAge() {
    
  function avg(emp_array) {
   
    if (emp_array.length === 0) {
      return 0;
    }
    const sumOfAges = emp_array.reduce((total, person) => total + person.age, 0);
  
    const average = sumOfAges / emp_array.length;
  
    return average;
  }
  
  const avgAge = avg(data);
  console.log("Average Age:", avgAge);
  
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
  function checkage(emp_array) {
    return emp_array.some(person => person.age > 25);
  }
  const isAnyAbove25 = checkage(data);
  
  if (isAnyAbove25) {
    console.log("There is at least one person older than 25.");
  } else {
    console.log("There is no person older than 25.");
  }
  
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
  
    const uniqueProfessionsSet = new Set();
  
    data.forEach(person => {
      if (person.profession) {
        uniqueProfessionsSet.add(person.profession);
      }
    });
  
    const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  
    console.log("Distinct Professions:", uniqueProfessionsArray);
  }
  
  
  
  // 8. Sort by Age
  function sortByAge() {
  
    data.sort((emp1, emp2) => emp1.age - emp2.age);
  console.log("Sorted by Age (Ascending):", data);
  
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
  
    const john = data.find(person => person.name.toLowerCase() === 'john');
  
    // Check if John was found
    if (john) {
      john.profession = 'Manager';
    } else {
      console.log("John was not found in the array.");
    }
  
  
  console.log("Updated Array:", data);
  
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;
  
    data.forEach(person => {
      const profession = person.profession ? person.profession.toLowerCase() : '';
  
      if (profession === 'developer') {
        developerCount++;
      } else if (profession === 'admin') {
        adminCount++;
      }
    });
  
    // Print the total counts
    console.log(`Total Developers: ${developerCount}`);
    console.log(`Total Admins: ${adminCount}`);
  
  }
  