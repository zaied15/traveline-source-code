import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <div>
        <h3>Difference between authorization and authentication?</h3>
        <p>
          Authentication verifies who the user is and Authorization determines
          what resources a user can access. <br />
          Authentication is visible to and partially changeable by the user but
          Authorization isn’t visible to or changeable by the user. <br />
          Authentication is the first step of a good identity and access
          management process and on the other hand Authorization always takes
          place after authentication. <br />
          Authentication needs usually user’s login details While Authorization
          needs user’s privilege or security levels. <br />
          Authentication determines whether the person is user or not and
          Authorization determines What permission do user have?
        </p>
      </div>
      <div>
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          I am using firebase authentication due to the following facilities:{" "}
          <br />
          1. Create Application without backend server <br />
          2. No need extra money spent for backend server <br /> 3. Sync real
          time data in the application <br /> 4. Quick display data in the
          application <br /> 5. Faster then any backend web services <br /> 6.
          No SQL database so it is more faster <br /> 7. You can provide any
          social networking login with very few lines code <br /> 8. Push
          notification <br /> 9. Auto Backup and many more… <br />
          Other Options instead of firebase authentication are many but I have
          mentioned some of them. These are Auth0, MongoDB, Passport, Okta etc.
        </p>
      </div>
      <div>
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
        <p>
          Besides authentication firebase also provide some awesome services. I
          list some of these in the following: <br />
          1. It provides a real-time database platform <br />
          2. It provides free hosting facilities <br />
          3. We can store user info safely here <br />
          4. It provides important social media login authorization. <br />
          5. We can use dynamic linking by using firebase
        </p>
      </div>
    </div>
  );
};

export default Blog;
