import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const BlogPage = () => {

  useDocumentTitle('Blog');

  return (
    <div className='container py-10'>
      <div className='bg-gray max-w-2xl mx-auto border border-border'>
        <div className='px-5 py-10 md:p-10 border-b border-border'>
          <h5 className='text-2xl font-semibold text-secondary'>Blog Post</h5>
        </div>
        <div className='px-5 py-10 md:p-10 border-b border-border'>
          <h5 className='text-xl font-semibold mb-4 text-secondary'>Difference between SQL and NoSQL</h5>
          <p className='text-text'>SQL databases are relational, while NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema, while NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
        <div className='px-5 py-10 md:p-10 border-b border-border'>
          <h5 className='text-xl font-semibold mb-4 text-secondary'>What is JWT, and how does it work?</h5>
          <p className='text-text'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p><br />
          <p className='text-text'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p><br />
          <p className='text-text'>Let, User sign-in using username and password or google/facebook. Then Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. Then User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Then Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
        </div>
        <div className='px-5 py-10 md:p-10 border-b border-border'>
          <h5 className='text-xl font-semibold mb-4 text-secondary'>What is the difference between javascript and NodeJS?</h5>
          <p className='text-text'>JavaScript : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers. It is basically used on the client-side. <br /><br /> NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. </p>
        </div>
        <div className='px-5 py-10 md:p-10'>
          <h5 className='text-xl font-semibold mb-4 text-secondary'>How does NodeJS handle multiple requests at the same time?</h5>
          <p className='text-text'>Node is single threaded. NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


/* 





 


*/