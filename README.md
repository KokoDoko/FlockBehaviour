# Flock Behaviour

![docs/images/screenshot.png](screenshot.png)

- Fenton runs after the mouse pointer. he goes slower when he is nearer the mouse.
- The sheep run away from Fenton. Sheep run slower when Fenton is further away.

[Demo](https://kokodoko.github.io/FlockBehaviour/)

### About the code

- The speed and direction of Fenton and the sheep is calculated [using vector math](https://www.mathsisfun.com/algebra/vectors.html)
- The sheep go slower when Fenton is further by using [inverse proportion](https://www.mathsisfun.com/algebra/directly-inversely-proportional.html)

### How to run locally

- Open [index.html](https://kokodoko.github.io/FlockBehaviour/) in localhost

### How to edit

- Install Typescript `npm install -g typescript`
- Transpile the code in watch mode by typing `tsc -w` in the terminal