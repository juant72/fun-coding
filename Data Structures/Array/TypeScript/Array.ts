//Instantiation
let empty=new Array();
let teams=new Array('Knicks','Mets','Giants');

//Literal notation
let otherTeams= ['Nets','Patriots','Jets'];

//size
console.log('Size: ' , otherTeams.length);

//Access
console.log('Access', teams[0]);

//sort
const sorted=teams.sort();
console.log('Sorted:' , sorted);

//search
const filtered=teams.filter( (team)=> team === 'Knicks');
console.log('Searched:',filtered);



