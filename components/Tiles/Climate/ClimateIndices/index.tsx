import ClimateTile from '../ClimateTile'
import ClimateIndicesChart from './ClimateIndicesChart'
import { TileSplitView } from '../../Base/TileSplitView'
import getTileData from '@/lib/api/getTileData'
import Title from '@/components/Elements/Title'
import { format } from 'date-fns'

interface IClimateIndicesTileProps {
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

export default async function ClimateIndicesTile({
  dataRetrieval,
}: IClimateIndicesTileProps) {
  const data = await getTileData('climate-indices')
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={dataRetrieval}
      dataSource="DWD"
      embedId="climate-indices"
      subtitle={
        'Häufigkeit von Temperaturkenntagen in Münster im Zeitraum der letzten 20 Jahre'
      }
      title="Klimakenntage"
    >
      <TileSplitView>
        <TileSplitView.Left>
          <div className="rounded bg-white">
            <ClimateIndicesChart />
          </div>
        </TileSplitView.Left>
        <TileSplitView.Right>
          <Title as="h5" variant={'dark'}>
            {infoText}
          </Title>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
}
