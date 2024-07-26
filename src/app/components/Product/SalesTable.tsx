import formatCurrency from "@/app/utils/formatCurrency";
import formatDate from "@/app/utils/formatDate";

type Sale = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

const SalesTable: React.FC<{ sales: Sale[] }> = ({ sales }) => {
  return (
    <table className="table-auto w-full">
      <thead className="text-center">
        <tr>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Week Ending
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Retail Sales
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Wholesale Sales
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Units Sold
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Retailer Margin
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {sales.map((sale) => {
          return (
            <tr key={sale.weekEnding} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">
                {formatDate(sale.weekEnding)}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {formatCurrency(sale.retailSales)}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {formatCurrency(sale.wholesaleSales)}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {sale.unitsSold}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {formatCurrency(sale.retailerMargin)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SalesTable;
