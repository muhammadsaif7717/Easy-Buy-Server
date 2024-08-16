<h1><strong>Easy Buy Server</strong></h1>

<h4>Client Repository: <a href="https://github.com/muhammadsaif7717/SCIC-Job-Task-2-Client.git">https://github.com/muhammadsaif7717/SCIC-Job-Task-2-Client.git</a></h4>
<h4>Visit: https://scic-job-task-2-client.vercel.app </h4>

<h2><strong>Project Overview</strong></h2>
<p>
  Easy Buy Server is the back-end for the Easy Buy online shopping website. It handles API requests, user authentication, product management, and payment processing.
</p>

<h2><strong>Features and Characteristics</strong></h2>
<ul>
  <li><strong>API Endpoints:</strong> RESTful APIs for managing products, users, and orders</li>
  <li><strong>User Authentication:</strong> Secure authentication using JWT</li>
  <li><strong>Database Integration:</strong> MongoDB for storing user and product data</li>
</ul>

<h2><strong>Technologies Used</strong></h2>
<ul>
  <li><strong>Back-End:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
</ul>

<h2><strong>Steps to Clone and Run Locally</strong></h2>
<ol>
  <li><strong>Clone the Repository:</strong>
    <pre><code>git clone https://github.com/muhammadsaif7717/SCIC-Job-Task-2-Server.git</code></pre>
  </li>
  <li><strong>Navigate to the Project Directory:</strong>
    <pre><code>cd SCIC-Job-Task-2-Server</code></pre>
  </li>
  <li><strong>Install Dependencies:</strong>
    <pre><code>npm install express cors dotenv mongodb</code></pre>
    <a href='https://github.com/muhammadsaif7717/SCIC-Job-Task-2-Server/blob/main/package.json' target='_blank'>View all dependencies</a>
  </li>
  <li><strong>Configure Environment Variables:</strong>
    <p>Create a <code>.env</code> file in the root directory with the following variables:</p>
    <pre><code>
DB_USER
DB_PASS
    </code></pre>
  </li>
  <li><strong>Start the Server:</strong>
    <pre><code>
      node index.js
      or
      nodemon index.js
    </code></pre>
  </li>
  <li><strong>Access the API:</strong> The server will be running at <a href="http://localhost:5000">http://localhost:5000</a>. You can use tools like Postman to test the API endpoints.</li>
</ol>

<p>Explore and manage the Easy Buy server with these steps!</p>
