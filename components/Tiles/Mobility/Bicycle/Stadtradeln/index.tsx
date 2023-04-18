import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import ChartContainer from './ChartContainer'

export default function StadtradelnTile() {
  return (
    <MobilityTile
      dataRetrieval="01.01.2022"
      dataSource="Stadtradeln"
      embedId="mobility-stadtradeln"
      subtitle="auf der Überholspur"
      title="Stadtradeln"
    >
      <ChartContainer />
      <Spacer />
      <Title as="h5">
        Auf die Leeze, fertig, los! Für mehr Radverkehr, Klimaschutz und
        Lebensqualität in die Pedale treten: Seit 2020 beteiligt sich die Stadt
        Münster an der jährlich stattfindenden, dreiwöchigen bundesweiten Aktion
        „Stadtradeln“ des globalen Netzwerks „Klima-Bündnis“.
      </Title>
    </MobilityTile>
  )
}
