import BuildingTile from '../BuildingsTile'

import EcoProfitData from '@/assets/data/ecoprofit.json'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { Spacer } from '@/components/Elements/Spacer'
import { format } from 'date-fns'

interface IEcoProfitData {
  companiesTotal: number
  savingsEuro: number
  savingsCO2: number
  companiesStartupConsulting: number
  updatedAt: string
  dataRetrieval: string
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const {
    companiesTotal,
    savingsEuro,
    savingsCO2,
    companiesStartupConsulting,
    updatedAt,
  } = EcoProfitData as IEcoProfitData

  // Pass data to the page via props
  return {
    props: {
      companiesTotal,
      savingsEuro,
      savingsCO2,
      companiesStartupConsulting,
      updatedAt,
      dataRetrieval: format(new Date(updatedAt), 'dd.MM.yyyy'),
    },
  }
}

export default function EcoProfitTile({
  companiesTotal,
  savingsEuro,
  savingsCO2,
  companiesStartupConsulting,
  dataRetrieval,
}: IEcoProfitData) {
  // const {
  //   companiesTotal,
  //   savingsEuro,
  //   savingsCO2,
  //   companiesStartupConsulting,
  //   updatedAt,
  // } = EcoProfitData as IEcoProfitData

  // const dataRetrieval = useFormattedDate(updatedAt)

  return (
    <BuildingTile
      dataRetrieval={dataRetrieval}
      dataSource="Stadt Münster"
      embedId={'building-ecoProfit'}
    >
      <Title as={'h1'} variant={'building'}>
        <AnimatedNumber>{companiesTotal}</AnimatedNumber> Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        Haben bereits am Ökoprofit-Projekt teilgenommen und gemeinsam{' '}
        <span className="text-buildings">
          <AnimatedNumber decimals={1}>{savingsEuro}</AnimatedNumber> Mio Euro
        </span>{' '}
        und{' '}
        <span className="text-buildings">
          <AnimatedNumber>{savingsCO2}</AnimatedNumber> t CO2
        </span>{' '}
        eingespart.
      </Title>
      <Spacer size={'xl'} />
      <Title as={'h1'} variant={'building'}>
        <AnimatedNumber>{companiesStartupConsulting}</AnimatedNumber>{' '}
        Unternehmen
      </Title>
      <Spacer />
      <Title as="subtitle">
        Haben zudem bereits die &quot;Startberatung Energieeffizienz&quot; in
        Anspruch genommen.
      </Title>
    </BuildingTile>
  )
}
