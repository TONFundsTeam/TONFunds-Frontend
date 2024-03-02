interface IInvestor {
  id: number,
  address: string,
  donated: string
}

const investorsData: IInvestor[] = [
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

const Investors = () => {
  return (
    <div className="container mx-auto p-6 my-24">
      <table className="min-w-full leading-normal text-left">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            #
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Address
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Donated
            </th>
          </tr>
        </thead>
        <tbody>
          {investorsData.map((investor: IInvestor) => (
            <tr key={investor.id}>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{investor.id}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{investor.address}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{investor.donated}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Investors;
