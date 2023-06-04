// @ts-ignore
import MobilityTile from '../MobilityTile'
import PassengerContent from './PassengerContent'
import { format } from 'date-fns'

// interface PVDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// }

interface IPassengerTileProps {
  dataRetrieval: string
}

// This gets called on every request
export async function getServerSideProps() {
  // Pass data to the page via props
  return {
    props: {
      dataRetrieval: format(new Date('2023-05-22T00:00:00.000Z'), 'dd.MM.yyyy'),
    },
  }
}

export default function PassengerTile({ dataRetrieval }: IPassengerTileProps) {
  return (
    <MobilityTile
      dataRetrieval={dataRetrieval}
      dataSource={'Stadtwerke Münster'}
      embedId="mobility-masterplan"
      subtitle={'Entwicklung der Fahrgastzahlen in den letzten Jahren'}
      title={'ÖPNV'}
    >
      <PassengerContent></PassengerContent>
    </MobilityTile>
  )
}
