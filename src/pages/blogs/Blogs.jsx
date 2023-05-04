import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Blogs = () => {
  const containerRef = useRef();

  return (
    <Container className="my-5" ref={containerRef}>
      <div>
        <h3>Differences between uncontrolled and controlled components.</h3>
        <p>
          An uncontrolled component is a component where the value of the input
          element is handled by the browser, and not React. In other words, the
          state of the component is not managed by React, but by the DOM itself.
          Uncontrolled components allow you to write less code, but at the
          expense of flexibility and control. An example of an uncontrolled
          component is an HTML input element that is not connected to a React
          state. <br />A controlled component, on the other hand, is a component
          where React manages the state of the input element. The value of the
          input element is set through the value prop, and changes to the input
          are handled through the onChange event. The component state is updated
          whenever the user interacts with the input element, and the updated
          value is reflected in the UI. Controlled components provide more
          flexibility and control, but require more code than uncontrolled
          components.
        </p>
      </div>
      <br />
      <div>
        <h3>How to validate React props using PropTypes</h3>
        <p>
          PropTypes is a useful tool in React for validating the data that is
          being passed down to child components through props. It is a
          type-checking library that helps to ensure that the data being passed
          to the component matches the specified type, and it also provides
          helpful warnings in the console when the data is of the wrong type.{" "}
          <br />
          To validate the React props, we can use prop-types library that
          provides a way to declare the intended types of properties passed to a
          component as well as custom validators.Other available type validators
          in prop-types include number, bool, array, object, func, symbol, node,
          and element, among others. <br />
          If a prop type is not satisfied, React will log a warning message in
          the console, which helps to catch errors early during development.
        </p>
      </div>
      <br />
      <div>
        <h3>Difference between nodejs and express js.</h3>
        <p>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It provides an environment for running JavaScript on the
          server-side. It has built-in modules for file system operations,
          networking, and other common server-side tasks, making it a popular
          choice for building server-side applications. <br />
          Express.js, on the other hand, is a web framework built on top of
          Node.js. It provides a set of features and tools for building web
          applications, including routing, middleware, and template engines. It
          simplifies the process of building web applications with Node.js by
          providing a higher level of abstraction and a simpler syntax.
        </p>
      </div>
      <br />
      <div>
        <h3>What is a custom hook, and why will you create a custom hook?</h3>
        <p>
          A custom hook in React is a JavaScript function that utilizes one or
          more built-in hooks to enable reusability of logic across different
          components. It allows you to encapsulate complex logic in a reusable
          function that can be called from multiple components. A custom hook
          usually follows the naming convention "useXXX," where "XXX" describes
          the purpose of the hook. <br /> <br />
          <span className="fs-4 fw-semibold">
            {" "}
            Creating a custom hook provides the following benefits:
          </span>{" "}
          <br /> <br />
          <ul>
            <li>
              <span className="fs-5 fw-semibold">Reusability</span>: By creating
              a custom hook, you can reuse a particular logic across multiple
              components. This saves you from rewriting the same code multiple
              times.
            </li>
            <li>
              <span className="fs-5 fw-semibold">Abstraction:</span> You can
              abstract away complex logic and provide a simplified interface to
              the users of your custom hook.
            </li>
            <li>
              <span className="fs-5 fw-semibold">Separation of Concerns:</span>{" "}
              By using custom hooks, you can separate the business logic from
              the UI layer. This makes your code more modular and easier to
              maintain.
            </li>
            <li>
              <span className="fs-5 fw-semibold">Code Organization:</span>{" "}
              Custom hooks provide a way to organize your code in a meaningful
              way. You can group related logic into a single custom hook and
              keep your codebase clean and organized.
            </li>
          </ul>
        </p>
      </div>
      <p className="mt-5 fst-italic text-secondary text-center">
        To download the blogs click below{" "}
      </p>
      <div className="text-center  ">
        <Pdf targetRef={containerRef} filename="Blogs.pdf">
          {({ toPdf }) => (
            <Button onClick={toPdf}>
              <FaArrowDown></FaArrowDown> Download PDF
            </Button>
          )}
        </Pdf>
      </div>
    </Container>
  );
};

export default Blogs;
