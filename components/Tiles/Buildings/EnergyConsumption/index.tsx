import BuildingTile from '../BuildingsTile'

import { TileSplitView } from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'
import EnergyConsumptionContent from './EnergyConsumptionContent'
import { format } from 'date-fns'

interface IEnergyComsumptionTileProps {
  dataRetrieval: string
}

// This gets called on every request
export async function getServerSideProps() {
  // Pass data to the page via props
  return {
    props: {
      dataRetrieval: format(new Date(), 'dd.MM.yyyy'),
    },
  }
}

export default async function EnergyComsumptionTile({
  dataRetrieval,
}: IEnergyComsumptionTileProps) {
  const data = await getTileData('building-energyConsumption')
  const infoText = data?.info ?? ''

  return (
    <BuildingTile
      dataRetrieval={dataRetrieval}
      dataSource="Stadt Münster"
      embedId={'building-energyConsumption'}
      subtitle={'So viel verbrauchen städtische Gebäude im Vergleich'}
      title={'Energieverbrauch'}
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div>
            <EnergyConsumptionContent />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </BuildingTile>
  )
}
