// Coding Challenge

const juliasDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const juliasDogsCopy = dogsJulia.slice();
  juliasDogsCopy.splice(0, 1);
  juliasDogsCopy.splice(-2);

  const allDogs = dogsJulia.concat(dogsKate);

  allDogs.forEach(function (age, ind) {
    age >= 3
      ? console.log(
          `Dog number ${ind + 1} is an adult, and is ${age} years old`
        )
      : console.log(`Dog number ${ind + 1} is still a puppy`);
  });
}

checkDogs(juliasDogs, kateDogs);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
