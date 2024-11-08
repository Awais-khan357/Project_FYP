import "./PracticePage.css";
import { useState } from "react";

const faqs = [
  {
    title: "How to get Library MemberShip Card?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How to Book Reservation Room Online?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "For How long student can sit in a Reservation Room?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How Long Library is Opened on Weekly days and Hours?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function PracticePage() {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((ques, i) => (
        <AccordianItem
          title={ques.title}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={ques.text}
          num={i}
        >
          {ques.text}
        </AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ title, text, num, isOpen, setIsOpen, children }) {
  const checkOpen = num === isOpen;
  function handleClick() {
    setIsOpen(checkOpen ? "null" : num);
  }
  return (
    <div className={`item ${checkOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {checkOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
