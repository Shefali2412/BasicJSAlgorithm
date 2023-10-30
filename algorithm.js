// 1. Print 1 - 135
// Algorithm:
// Input : give numbers 1 to 135
// Output : should print 1 to 135
// step 1: use for loop ,initialise i to 1 ,
//           give condition i less than equal to 135
//              and increament i value by 1 each time 
// step 2 : To print i

for(i=1; i<=135; i++)
{
    console.log(i);
}

// 2. print Odd Numbers 1 - 135
// Algorithm:
// Input : give numbers 1 to 135
// Output : should print odd numbers like 1,3,5....
// step 1: use for loop ,initialise j to 1 ,
//           give condition j less than equal to 135
//              and increament j value by 2 each time 
// step 2 : To print i  

for(j=1; j<=135; j=j+2)
{
    console.log(j);
}

// 3. Sum of Printed Numbers
// Algorithm:
// Input : give numbers 1 to 135
// Output : should print 1 to 135 and sum of the numbers that have been printed so far
// step 1: create and initialise variable n to 0
// step 2: use for loop ,initialise k to 1 ,
//           give condition k less than equal to 135
//              and increament k value by 1 each time 
// step 3 : To print n 

let n = 0;
for(k=0; k<=135;k++)
{
    n = k+n;
    console.log("Number is:" + k + " Sum:" + n);
}

// 4. Print the elements of an array
// I/O :  array x = [1,4,2,12]
// O/P :  give all numbers on the screen & should work with arrays of all sizes.
// step 1 : create a variable x & initialise with array
// step 2 : use forEach loop  and pass a list function
// step 3 : to print all X values

let x = [1,4,2,12,3,7,9];
//x.forEach(list => {console.log(x)});


//another way
let X = [1, 4, 2, 12];
for (let i = 0; i < X.length; i++) {
  console.log(X[i]);
}

// 5.  Find Max
// I/O : Array with +ve, -ve and 0 values
// O/P : give max 
// Algorithm :
// step 1: create variable Y and intialise with array
// step 2: create varaible max & initialise to Y[0]
// step 3: use for loop , initialise i to 1 , 
//             condition i less than Y length ,
//               increament i by 1
// step 3a: use if and give condition Y[i] > max 
//                       then max is equal to Y[i]    
//step 4: print max value 

let Y = [2,-3, -5, 0 ,7, 10];
let max = Y[0];
for(i=1; i < Y.length; i++)
{
    if(Y[i] > max){
        max = Y[i];
    }

}
console.log(max);

// 6. Get Average
// I/O : array 
// O/P : give average
// Algorithm :
// step 1: create & initalise a variable A with array
// step 2: create & initalise a variable sum to 0
// step 3: use for loop , i to 0 , i less than length of array , increament i by 1
//            then, add sum , A[i] & initialise to sum 
// step 4: create and initalise a variable Average with sum/A.length
// step 5: print average       


let A = [2, 1, 3];
let sum = 0;
for(let i=0; i<A.length; i++)
{
    sum = sum + A[i];

}
let average = sum/A.length;
console.log(average);

// 7. Eliminate the Negatives
// algorithm :
// step 1: create & initalise a variable E with array
// step 2: use for loop
//  step 2a: use if/else 
// step 3: print array

let E =  [2,-1,4,-3,6];


for(let i=0; i<E.length; i++)
{
    if(E[i] < 0)
    {
       E[i] = 0;
    } else {
        E[i] = E[i];
    
    }

}
console.log(E);

// 8. Number to String
// I/O: give +ve & -ve Numbers
// O/P: give array by turning -ve numbers to string 
// agorithm:
// step 1: create & initalise a variable A with array S
// step 2: use for loop
// step 2a: use if/else 
// step 3: print array


let S =  [2,-1,4,-3,6];


for(let i=0; i<S.length; i++)
{
    if(S[i] < 0)
    {
       S[i] = "Turning";
    } else {
        S[i] = S[i];
    
    }

}
console.log(S);














