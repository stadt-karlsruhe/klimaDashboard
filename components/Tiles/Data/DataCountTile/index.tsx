import Title from '@/components/Elements/Title'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import DataTile from '../DataTile'
import { Daten } from '@/components/Icons'
import { format } from 'date-fns'

interface IDataCountTileProps {
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

export default function DataCountTile({ dataRetrieval }: IDataCountTileProps) {
  return (
    <DataTile
      dataRetrieval={dataRetrieval}
      dataSource={'Stadt Münster'}
      embedId={'climate-data'}
      title={
        <>
          <AnimatedNumber className="font-medium">{20}</AnimatedNumber>{' '}
          Datenkacheln
        </>
      }
    >
      <div>
        <div className="flex flex-row justify-center gap-6">
          <span className="flex flex-col justify-center">
            <Daten className="h-20 text-primary md:h-44" />
          </span>
          <Title as={'subtitle'}>
            Können Sie momentan zu den verschiedenen Kategorien auf unserem
            Dashboard finden. Sie haben Daten?{' '}
            <span className="text-secondary">
              <a href="mailto:smartcity@stadt-muenster.de">
                Schreiben Sie uns!
              </a>
            </span>{' '}
          </Title>
        </div>
      </div>
    </DataTile>
  )
}
