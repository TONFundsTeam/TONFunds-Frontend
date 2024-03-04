import { FC } from "react";

export interface IPage {
  name: string,
  path: string,
  element: FC
}

export interface IInvestor {
  id: number,
  address: string,
  donated: string
}

export const investorsData: IInvestor[] = [
  { id: 1, address: "UQ...u1yz", donated: "1000 TON" },
  { id: 2, address: "username", donated: "10 TON" },
  { id: 3, address: "username", donated: "10 TON" },
  { id: 4, address: "username", donated: "10 TON" },
  { id: 5, address: "username", donated: "10 TON" },
  { id: 6, address: "username", donated: "10 TON" },
  { id: 7, address: "username", donated: "10 TON" },
  { id: 8, address: "username", donated: "10 TON" },
  { id: 9, address: "username", donated: "10 TON" },
  { id: 10, address: "username", donated: "10 TON" },
  { id: 11, address: "username", donated: "10 TON" },
  { id: 357, address: "You (UQ...nF4K)", donated: "10 TON" },
];
