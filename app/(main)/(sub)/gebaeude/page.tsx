import Columns from '@/components/Layout/Columns'
import EcoProfitTile from '@/components/Tiles/Buildings/EcoProfit'

export default function Climate() {
  return (
    <>
      <Columns>
        {/* @ts-expect-error Server Component */}
        <EcoProfitTile />
      </Columns>
    </>
  )
}
