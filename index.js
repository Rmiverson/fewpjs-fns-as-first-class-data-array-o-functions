const wakeDog = (dogName, dogBreed) => {
   let ans = "Wake " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

const leashDog = (dogName, dogBreed) => {
   let ans = "Leash " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

const walkToPark = (dogName, dogBreed) => {
   let ans = "Walk to the park with " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

const throwFrisbee = (dogName, dogBreed) => {
   let ans = "Throw the frisbee for " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

const walkHome = (dogName, dogBreed) => {
   let ans = "Walk home with " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

const unleashDog = (dogName, dogBreed) => {
   let ans = "Unleash " + dogName + " the " + dogBreed
   console.log(ans)
   return ans
}

let routine = [
   wakeDog,
   leashDog,
   walkToPark,
   throwFrisbee,
   walkHome,
   unleashDog
]

const exerciseDog = (dogName, dogBreed) => {
   let ans = []
   for (let i = 0; i < routine.length; i++) {
      ans.push(routine[i](dogName, dogBreed))
   }
   return ans
}
