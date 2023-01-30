import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="theFAQ">
      <ul>
        <div className="faqQuestion">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eaque!
          </li>
        </div>
        <div className="faqAnswer">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            neque doloribus nesciunt odit expedita molestias, explicabo dicta
            nihil esse? Similique.
          </li>
        </div>
        <br></br>
        <div className="faqQuestion">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eaque!
          </li>
        </div>
        <div className="faqAnswer">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            neque doloribus nesciunt odit expedita molestias, explicabo dicta
            nihil esse? Similique.
          </li>
        </div>
        <br></br>
        <div className="faqQuestion">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eaque!
          </li>
        </div>
        <div className="faqAnswer">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            neque doloribus nesciunt odit expedita molestias, explicabo dicta
            nihil esse? Similique.
          </li>
        </div>
        <br></br>
        <div className="faqQuestion">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eaque!
          </li>
        </div>
        <div className="faqAnswer">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            neque doloribus nesciunt odit expedita molestias, explicabo dicta
            nihil esse? Similique.
          </li>
        </div>
        <br></br>
      </ul>
    </div>
  );
};

export default Faq;
