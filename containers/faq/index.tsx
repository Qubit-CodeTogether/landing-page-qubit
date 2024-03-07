import Collapse from "./Collapse";

const FAQ = [
  {
    title: "Who can join Qube IT?",
    content:
      "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ...",
  },
  {
    title: "Is there a cost to join Qube IT?",
    content:
      "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ...",
  },
  {
    title: "How can I get involved in Qube IT projects?",
    content:
      "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ...",
  },
  {
    title:
      "I'm new to coding/technology. Is Qube IT suitable for me?",
    content:
      "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ...",
  },
];

export default function FAQSection() {
  return (
    <div className="flex flex-col gap-10 items-center p-5 md:p-10">
      <h2 className="font-semibold text-[32px] md:text-[40px] text-center">
        Frequently Ask Questions <br className="hidden md:block"/> (FAQ){" "}
      </h2>
      <div className="space-y-5">
        {FAQ.map((faq) => (
          <Collapse
            key={faq.title}
            title={faq.title}
            content={faq.content}
          />
        ))}
      </div>
    </div>
  );
}
