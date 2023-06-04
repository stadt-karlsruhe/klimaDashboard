import Title from '@/components/Elements/Title'
import EnergyTile from '../EnergyTile'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format } from 'date-fns'

// interface PVDataType {
//   ZEIT: string
//   AnzahlAnlagen: number
//   AnzahlSolarModule: number
//   Bruttoleistung: number
//   Nettonennleistung: number
// }

interface ILanternsTileProps {
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

export default function LanternsTile({ dataRetrieval }: ILanternsTileProps) {
  // const [data] = PVData as PVDataType[]

  return (
    <EnergyTile
      dataRetrieval={dataRetrieval}
      dataSource={'Stadt Münster - Amt für Immobilienmanagement'}
      embedId="energy-lanterns"
      title={
        <>
          <AnimatedNumber className="font-medium">{5200}</AnimatedNumber>{' '}
          LED-Leuchtmittel
        </>
      }
    >
      <div>
        <Title as={'subtitle'}>
          schenken Münsters Straßen bereits klimafreundliches Licht. Die
          Stadtnetze Münster rüsten nach und nach alle rund{' '}
          <span className="text-energy">
            <AnimatedNumber>{28000}</AnimatedNumber> Straßenlaternen
          </span>{' '}
          im Stadtgebiet mit der Technologie aus.
        </Title>
      </div>
    </EnergyTile>
  )
}
