const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
  //Stringify the students object with only firstName, lastName and skills properties
  const formSubmit = JSON.stringify(student, ['firstName', 'lastName', 'skills']);