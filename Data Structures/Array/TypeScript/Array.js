//Instantiation
var empty = new Array();
var teams = new Array('Knicks', 'Mets', 'Giants');
//Literal notation
var otherTeams = ['Nets', 'Patriots', 'Jets'];
//size
console.log('Size: ', otherTeams.length);
//Access
console.log('Access', teams[0]);
//sort
var sorted = teams.sort();
console.log('Sorted:', sorted);
//search
var filtered = teams.filter(function (team) { return team === 'Knicks'; });
console.log('Searched:', filtered);
