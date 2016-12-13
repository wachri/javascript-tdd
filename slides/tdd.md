## TDD
(Test driven development)

---
> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only.

https://en.wikipedia.org/wiki/Test-driven_development

---
### Benefits
* Fast feedback (that things works as expected)
* Easier refactoring
* Encourages to refactore / improve things
* Code documentation
* You only implement things you really need.
* Less debugging time

---
### Disadvantages?
* It's hard to learn
* You have to be disciplined
* Slows down development


---
### (Simplified) Workflow
1. Red
1. Green
1. Refactoring
1. again...

---
### Red
You first write a red Test. And this only for your current problem!

```
    it('should add 1 + 1', () => {
        expect(add(1, 1)).toBe(2);
    });
```

---
#### This is for
* You define your requirements
* You see that your test is working (because your requirements aren't met)



---
### Green
You make your test "green" as fast as possible.

```
    it('should add 1 + 1', () => {
        expect(add(1, 1)).toBe(2);
    });
```

```
    function add(param1, param2) {
        return 2;
    }
```

---
#### This is for
* You implement only the things you really need!
* You see that your test is working

---
#### Refactoring
* You do not have do do this every time
* In this step you refactore
* You can refactore here the test, too!
* After refactoring, the tests should be green


---
#### Red
Here we start againe with our next requirements

```
    it('should add 1 + 1', () => {
        expect(add(1, 1)).toBe(2);
    });

    it('should add 1 + 2', () => {
        expect(add(1, 2)).toBe(3);
    });
```

---
### Workflow
![TDD global lifecycle](./slides/img/TDD_Global_Lifecycle.png) [By Xarawn - Own work, CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=44782343)


---
### Some more words

---
> If you test something manually you can write a unit test instead!


---
> It can take a while before you reap the benefits of your (extra) work with the tests


---
> It's not only for you. Every one in your team can benefit from your tests


