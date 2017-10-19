//function that takes total work hours, number or tasks and a duration for each task and produces a schedule for each task with available freeTime
function dayPlan (hours, tasks, duration){
  //converts total hours of work to availableMins
  var availableMins = hours * 60;
  //sets workTime for each task based on duration
  var workTime = duration * tasks;
  //sets available freeTime by removing the workTime from the availableMins
  var freeTime = availableMins - workTime;
    //checks freeTime to see if it has a value less than 0
    if(freeTime < 0){
       return 'You\'re not sleeping tonight!';
    }
  //sets how long your break will be and rounds it to nearest whole number
  var breakTime = Math.round(freeTime / (tasks - 1));
  //creates an empty schedule array
  var schedule = [];
  //loops through array
  for(var i = 0; i < (tasks * 2 - 1); i++){
    if(i % 2 === 0 ){
       schedule.push(duration);
    } else {
       schedule.push(breakTime);
    }
  }
  return schedule;
}

//function that takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
  //creates empty array to hold updated array
  var uniques = [];
  //loops through iterable
  for (var i=0; i <= iterable.length; i++){
    //sets the current index on interable
    var curr = iterable[i];
    //sets the next index in the array to compare with curr
    var next = iterable[i + 1];
    //checks that curr is not equal to next
    if(curr !== next){
      //pushes the curr value to the uniques array
      uniques.push(curr);
    }
  }
  return uniques;
}

//finds the integer that appears an odd number of times
function findOdd(A) {
  //set variable to hold how many times a given intager occurs
  var count = 0;
  //set variable to hold the integer that occurs an odd number of times
  var result = 0;
  //start looping through the A
  for(var i=0; i<=A.length; i++){
    //set variable to hold value from first loop for comparisson
    var tempHolder = A[i];
    //set value for how many times the integer occurs
    var tempCount = 0;
    //start looping through A for comparisson values
     for(var j=0; j<=A.length; j++){
        //checks that the index of 2nd loop is uqual to current value at tempHolder
        if(A[j] === tempHolder){
        //adds to the tempCount
        tempCount++;
        }
     }
     //checks that the tempCount is not even and not 0
     if(tempCount % 2 !== 0 && tempCount > count) {
       //sets the value of tempCount to count
       count = tempCount;
       result = tempHolder;
     }
  }
  return result;
}
