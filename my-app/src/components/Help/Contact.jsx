import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactForm">
      <h1>Can't find an answer ? Get in touch</h1>

      <div className="formSection">
        <form>
          <label>
            {/* First Name: */}
            <input type="text" placeholder="First name" />
          </label>
          <br />
          <label>
            {/* Last Name: */}
            <input type="text" placeholder="Last name" />
          </label>
          <br />
          <label>
            {/* Email: */}
            <input type="email" placeholder="Email" />
          </label>
          <br />
          <label>
            {/* Text: */}
            <textarea placeholder="Your thoughts ?" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
