<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> `A` is correct because the variable `greeting` is declared but never used and
in the second line `greetign = {};` JavaScript will declare a global variable named `greetign` when we are trying to assign an empty object to it. In this case, the output will be an empty object as we declared `{}`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this code, the + operator will concatenate `a` and `b` because the second parameter
`b` is declared as a string while calling the function `sum()`. so the output is a string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>There is an array `food` containing some foods. Then, we created an object named `info` with a property favoriteFood initialized to the 0 number index of `food` array. in the next line of the code we changed the value of info.favoriteFood to a new value.

This change doesn't affect the `food` array. The `food` array remains same,then we console the `food`, it show the array `food` as output</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In this code there is function `sayHi`, that have a parameter `name`. this function return "Hi there, " with the value of the `name`.
but while calling the function `sayHi` we didn't pass any arguments, so the `name` stays undefined, therefore the function return `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 

<i>in JavaScript `forEach` method iterates every element on the array , forEach mehod executes a callback function, in this case the callback function is `num()`. this callback function is checking the the every element of the array, is it truthy or not. if it is truthy the the function is increasing the value of `count` by 1 and the initial value of count is 0, after completing forEach method the final value of `count` is 3 because there is 3 truthy value in the `num` array , so the 
`console.log(count)` give output 3</i>

</p>
</details>