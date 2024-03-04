import { FC } from "react";
import { IInvestor, investorsData } from "@app/pages/interfaces.ts";

const Investors: FC = () => {
  return (
    <div className="container mx-auto p-6 my-10 md:my-24">
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
