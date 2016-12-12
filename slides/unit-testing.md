## Unit Testing

---
> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.


http://searchsoftwarequality.techtarget.com/definition/unit-testing

---
![testing-pyramid](./slides/img/testing-pyramid.png)

---
### Terms

---
#### Stub
> Test stubs are functions (spies) with pre-programmed behavior.

http://sinonjs.org/docs/#stubs

---
#### Mocks
> Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. A mock will fail your test if it is not used as expected.

http://sinonjs.org/docs/#mocks

---
#### Spy
> A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls.

http://sinonjs.org/docs/#spies

---
### Characteristics of a good unit test
* Really fast (milliseconds not seconds!)
* Able to be fully automated
* Has full control over all the pieces running (Use mocks or stubs to achieve this isolation when needed)
* Can be run in any order  if part of many other tests
* Runs in memory (no DB or File access, for example)
* Consistently returns the same result
* Runs fast
* Tests a single logical concept in the system
* Readable
* Maintainable
* Trustworthy (when you see its result, you don’t need to debug the code just to be sure)