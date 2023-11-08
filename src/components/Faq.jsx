const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I post a job listing?",
      answer:
        'To post a job listing, log in to your account and click on the "Add Jobs" button. Fill in the required details, such as job title, description, deadline, and category, and click "Submit."',
    },
    {
      id: 2,
      question: "How can I bid on a job listing?",
      answer:
        'To bid on a job listing, find the job you\'re interested in and click the "Bid" button. Enter your bid amount and any additional information requested by the job poster. Then, click "Submit Bid."',
    },
  ];
  return (
    <>
      <div className="container mx-auto py-20">
        <h1 className="text-xl md:text-3xl font-bold text-center pb-10">FAQ</h1>
        {faqData.map((item) => (
          <div key={item.id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name={`my-accordion-${item.id}`}/>
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
