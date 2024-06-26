## Questions on React's useState hook:

    1. Basic Usage:
    What is the useState hook in React, and why is it used?

        The useState hook is a function that lets you add state to functional components in React. 
        It returns an array with two elements: the current state value and a function to update that state. 
        It is used to manage local state within a functional component.

    How do you import and use the useState hook in a functional component?
    
        import React, { useState } from 'react';

        function ExampleComponent() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
        }


    2. Syntax and Initialization:
    How do you initialize a state variable using the useState hook? Provide an example.

        const [name, setName] = useState('John');

        
    Can you provide an example of using useState with an initial value?

    3. State Management:
    How do you update a state variable using the useState hook?
    What happens if you call the sstate updater function with the same value as the current state?

    4. State with Different Data Types:
    How can you use useState to manage an object as a state variable? Provide an example.
    Demonstrate how to manage an array as a state variable using the useState hook.

    5. Functional Updates:
    What are functional updates in the context of the useState hook, and when should they be used?
    Provide an example where a functional update with useState is necessary.

    6. Multiple State Variables:
    How do you manage multiple state variables in a single functional component using useState?

    7. Best Practices:
    Why is it considered a best practice to avoid setting state directly in a component render function?
    What are some common pitfalls to avoid when using the useState hook?

    8. Complex State Logic:
    How would you handle complex state logic that involves multiple sub-values with useState?

    9. Performance Considerations:
    How can frequent state updates impact performance, and how can this be mitigated?

    10. Comparison with Class Components:
    How does useState in functional components compare to state management in class components?