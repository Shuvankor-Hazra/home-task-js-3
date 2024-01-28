const friends = ['balam', 'kalam', 'salam', 'galam', 'khalam'];

// shift
friends.shift();
console.log(friends);

const out1 = friends.shift();
const out2 = friends.shift();
console.log(friends);
console.log(out1, out2);


// unshift
friends.unshift('kabul');
console.log(friends);

friends.unshift('habul');
friends.unshift('jambul');
console.log(friends);