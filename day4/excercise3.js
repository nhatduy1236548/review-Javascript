//Write a program which tells the number of days in a month.
let month = prompt('Enter a month:');
switch (month.toUpperCase()) {
    case 'JANUARY':
        alert(' January has 31 days.')
      break
    case 'FEBRUARY':
      alert(' February has 28 days.')
      break
    default:
        alert('It is not a month.')
  }