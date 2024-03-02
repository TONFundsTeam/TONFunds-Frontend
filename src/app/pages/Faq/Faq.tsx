import _ from "lodash";

interface IFaq {
  q: string,
  a: string
}

const faqList: IFaq[] = [
  {
    q: "What is that platform for?",
    a: "This platform does not provide you with a 100% completion rate of your fundraising. This is just a convenient tool for attracting investments."
  },
  {
    q: "What I need to create fundraising?",
    a: "Just 0.5+ TON on your wallet and a great idea. You need to describe in detail why you are raising funds," +
      " what you plan to work on, say about project team, previous projects and experience in general."
  },
  {
    q: "What I will receive after donation?",
    a: "This is determined by the fundraising creator."
  },
  {
    q: "How Fundraising works?",
    a: "TON Funds works on contracts. After creating a fundraiser, fundraising smart-contract deploying in\n" +
      "              blockchain and start accepting investments. After the end of the collection, the creator of this\n" +
      "              fundraising must claim funds."
  },
  {
    q: "How does the platform make money?",
    a: "Answer number one text."
  }

];

const Faq = () => {

  return (
    <div className="mx-auto container">
      <div className="p-6 my-24 w-1/2">
        {_.map(faqList, (faq: IFaq, index: number) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{faq.q}</h2>
            <p className="py-4 text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
