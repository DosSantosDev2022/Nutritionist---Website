import { table } from '../../../../configs/pricingdata.json'
import { TableHead } from './TableHead'
import { TableHeaderCell } from './TableHeaderCell'

const TabelaPlanos = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <TableHead>
          <tr className="">
            <TableHeaderCell>CARACTERÍSTICAS</TableHeaderCell>
            <TableHeaderCell>PLANO GRÁTIS</TableHeaderCell>
            <TableHeaderCell>PLANO PREMIUM</TableHeaderCell>
            <TableHeaderCell>PLANO ULTIMATE</TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {table.map((item, index) => (
            <tr className="text-center" key={index}>
              <td className="border border-GreyShades_200 p-4 text-xl font-normal text-GreyShades_700">
                {item.caracteristica}
              </td>
              <td className="border border-GreyShades_200 p-4">
                <img
                  src={item.planoGratis}
                  className="w-8 h-8 mx-auto"
                  alt=""
                />
              </td>
              <td className="border border-GreyShades_200 p-4">
                <img
                  src={item.planoPremium}
                  className="w-8 h-8 mx-auto"
                  alt=""
                />
              </td>
              <td className="border border-GreyShades_200 p-4">
                <img
                  src={item.planoUltimate}
                  className="w-8 h-8 mx-auto"
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TabelaPlanos
