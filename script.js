import { sayHello } from "./sayHello.js";

sayHello();

import { todoApplication } from "./todoApplication.js";

const addTodoButton = document.querySelector("#addTodoButton");

addTodoButton.addEventListener("click", todoApplication);