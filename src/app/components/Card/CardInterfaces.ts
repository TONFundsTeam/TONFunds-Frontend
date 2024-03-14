
export interface ICards {
  title: string,
  desc: string,
  image: string,
  inTrand: boolean,
  rewards: boolean,
  type: string,
  collected: number,
  total: number,
  currency: string,
}

export interface ICardProps {
  data: ICards
}

export const cards: ICards[] = [
  {
    title: "TON Funds developing",
    desc: "This is test description to show how it must seems: we have field to some information about fundraising. " +
      "Here can be text with only 300 symbols with main information about the fundraising.",
    image: "/coin.png",
    inTrand: false,
    rewards: false,
    type: "Fundraising type",
    collected: 345,
    total: 1000,
    currency: "TON",
  },
  {
    title: "TON Funds developing 2",
    desc: "This is test description to show how it must seems: we have field to some information about fundraising. " +
      "Here can be text with only 300 symbols with main information about the fundraising.",
    image: "/coin.png",
    inTrand: true,
    rewards: true,
    type: "Fundraising type",
    collected: 420,
    total: 1000,
    currency: "TON",
  },
  {
    title: "TON Funds developing 4",
    desc: "This is test description to show how it must seems: we have field to some information about fundraising. " +
      "Here can be text with only 300 symbols with main information about the fundraising.",
    image: "/coin.png",
    inTrand: true,
    rewards: false,
    type: "Fundraising type",
    collected: 999,
    total: 1000,
    currency: "TON",
  }
  ,
  {
    title: "TON Funds developing 6",
    desc: "This is test description to show how it must seems: we have field to some information about fundraising. " +
      "Here can be text with only 300 symbols with main information about the fundraising.",
    image: "/coin.png",
    inTrand: false,
    rewards: true,
    type: "Fundraising type",
    collected: 16,
    total: 1000,
    currency: "TON",
  }
];
