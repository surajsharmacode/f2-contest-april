
let employeesDetail = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let developers=employeesDetail.filter(employee=>employee.profession==="developer");
    developers.map(developer=>console.log(developer));

    //Write your code here , just console.log
  }
  
  function PrintDeveloperbyForEach() {
    employeesDetail.forEach(employee=>{
        if(employee.profession==="developer"){
            console.log(employee)
        }
    });

    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employeesDetail.push(newEmployee);
    console.log(newEmployee);
   // console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = employeesDetail.filter(employee => employee.profession !== 'admin');
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees = [
        { id: 4, name: "peter", age: "22", profession: "designer" },
        { id: 5, name: "mary", age: "23", profession: "marketing" },
        { id: 6, name: "tim", age: "21", profession: "developer" }
      ];
      const concatenatedArray = employeesDetail.concat(newEmployees);
      console.log(concatenatedArray);
  }