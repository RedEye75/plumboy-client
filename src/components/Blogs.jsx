import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <article
        data-aos="zoom-out-left"
        className="rounded-lg border  border-b-green-600 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            What is the Difference between SQL and NoSQL ??
          </h3>
        </Link>

        <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-500 line-clamp-3">
          SQL is a decades-old method for accessing relational databases, and
          most who work with databases are familiar with it. As unstructured
          data, amounts of storage and processing power and types of analytics
          have changed over the years, however, we’ve seen different database
          technologies become available that are a better fit for newer types of
          use cases. These databases are commonly called NoSQL. SQL and NoSQL
          differ in whether they are relational (SQL) or non-relational (NoSQL),
          whether their schemas are predefined or dynamic, how they scale, the
          type of data they include and whether they are more fit for multi-row
          transactions or unstructured data.
        </p>
      </article>
      <article
        data-aos="fade-down"
        data-aos-easing="linear"
        className="rounded-lg border border-b-green-600 border-b-4 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            What is JWT, and how does it work?
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed font-semibold text-gray-500 line-clamp-3">
          JWT , or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you
          will get two JSON strings: <br />1 : The header and the payload. 2.The
          signature.
        </p>
      </article>
      <article
        data-aos="fade-up"
        className="rounded-lg border border-b-green-600 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            What is the difference between javascript and NodeJS ??
          </h3>
        </Link>

        <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-500 ">
          JavaScript is a programming language, which runs in web browsers.
          Whereas Node.js is an interpreter or running environment for
          JavaScript, which holds a lot of requiring libraries and all.
          JavaScript is basically one standard defining programming language; it
          can run any browser with a default browser running environment. It is
          a very strong language normally used for a web application on any
          verification or any specific business logic. We need to append in the
          screen without page refreshing. JavaScript also helps to use Ajax at
          any time, which helps us call any server-side script for given dynamic
          data based on the requirement. It also helps with generating dynamic
          HTML tables based on business requirement. JQuery is one of the
          popular libraries to make comfortable use of JavaScript by avoiding to
          write a lot of code
        </p>
      </article>
      <article
        data-aos="fade-right"
        className="rounded-lg border  border-b-green-600 border-b-4  p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <Link to="#">
          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
            How does NodeJS handle multiple requests at the same time ??
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed font-semibold text-gray-500 ">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
