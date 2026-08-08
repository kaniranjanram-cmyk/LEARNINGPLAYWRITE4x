# JavaScript Keywords

## Reserved Keywords (Cannot use as identifiers)

| Keyword | Category | Description |
|---------|----------|-------------|
| `break` | Control Flow | Exits a loop or switch statement |
| `case` | Control Flow | Matches a value in a switch statement |
| `catch` | Error Handling | Handles an exception from a try block |
| `class` | OOP | Declares a class |
| `const` | Declaration | Declares a block-scoped constant variable |
| `continue` | Control Flow | Skips to the next iteration of a loop |
| `debugger` | Debugging | Invokes available debugging functionality |
| `default` | Control Flow | Default case in a switch statement |
| `delete` | Operator | Deletes a property from an object |
| `do` | Control Flow | Creates a do-while loop |
| `else` | Control Flow | Alternative branch in an if statement |
| `export` | Module | Exports a module (ES Modules) |
| `extends` | OOP | Creates a subclass |
| `false` | Literal | Boolean false value |
| `finally` | Error Handling | Runs after try/catch regardless of outcome |
| `for` | Control Flow | Creates a for loop |
| `function` | Declaration | Declares a function |
| `if` | Control Flow | Conditional statement |
| `import` | Module | Imports a module (ES Modules) |
| `in` | Operator | Checks if a property exists in an object |
| `instanceof` | Operator | Checks if an object is an instance of a class |
| `new` | Operator | Creates an instance of a constructor/class |
| `null` | Literal | Represents an intentional absence of value |
| `return` | Control Flow | Returns a value from a function |
| `super` | OOP | Calls parent class methods/constructor |
| `switch` | Control Flow | Multi-way conditional branching |
| `this` | Context | Refers to the current execution context |
| `throw` | Error Handling | Throws a custom exception |
| `true` | Literal | Boolean true value |
| `try` | Error Handling | Wraps code that may throw an exception |
| `typeof` | Operator | Returns the type of a value as a string |
| `var` | Declaration | Declares a function-scoped variable (legacy) |
| `void` | Operator | Evaluates an expression and returns undefined |
| `while` | Control Flow | Creates a while loop |
| `with` | Scope | Extends the scope chain (strict mode disallowed) |
| `yield` | Generator | Pauses/resumes a generator function |

## Future Reserved Keywords (ES3+)

| Keyword | Status | Description |
|---------|--------|-------------|
| `enum` | ES3+ reserved, not yet used | Reserved for future use |

## Literals & Built-in Identifiers

| Keyword | Category | Description |
|---------|----------|-------------|
| `undefined` | Global | Represents an uninitialized/undefined value |
| `Infinity` | Global | Represents mathematical infinity |
| `NaN` | Global | Represents Not-a-Number |
| `arguments` | Scope | Array-like object of function arguments |
| `globalThis` | ES2020 | Global object (platform-agnostic) |

## Contextual Keywords (Reserved in some contexts)

| Keyword | Category | Description |
|---------|----------|-------------|
| `async` | Async | Declares an async function |
| `await` | Async | Waits for a Promise to resolve (inside async) |
| `let` | Declaration | Declares a block-scoped variable |
| `static` | OOP | Declares a static method/property on a class |
| `of` | Iteration | Used in for-of loops |
| `get` | OOP | Defines a getter property |
| `set` | OOP | Defines a setter property |
| `from` | Module | Used in dynamic import/export syntax |

## ES6+ Additions

| Keyword | ES Version | Description |
|---------|-----------|-------------|
| `class` | ES6 | Declares a class |
| `const` | ES6 | Block-scoped constant declaration |
| `export` | ES6 | Module export syntax |
| `extends` | ES6 | Class inheritance |
| `import` | ES6 | Module import syntax |
| `let` | ES6 | Block-scoped variable declaration |
| `super` | ES6 | Parent class reference |
| `yield` | ES6 | Generator function control |
| `async` | ES2017 | Async function declaration |
| `await` | ES2017 | Promise resolution waiting |
| `static` | ES2015+ | Static class members |
| `globalThis` | ES2020 | Global object reference |

## Operator Keywords

| Keyword | Operator Type | Description |
|---------|--------------|-------------|
| `typeof` | Unary | Returns data type as a string |
| `instanceof` | Binary | Tests if object is instance of class |
| `in` | Binary | Tests if property exists in object |
| `delete` | Unary | Removes a property from an object |
| `void` | Unary | Evaluates expression, returns undefined |
| `new` | Unary | Creates instance of a constructor function |
