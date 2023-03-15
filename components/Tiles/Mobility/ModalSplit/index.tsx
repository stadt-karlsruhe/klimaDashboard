'use client'

import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import ModalSplitChart from './ModalSplitChart'
import { MuensterBackground } from '@/components/Icons/'
import Title from '@/components/Elements/Title'

export default function ModalSplitTile() {
  return (
    <MobilityTile
      dataRetrieval="live"
      dataSource="Stadt Münster - Amt für Mobilität"
      embedId="modalsplit"
      subtitle="Jahresvergleich aller 2019 zurückgelegten Kilometer in Münster (PKW, Fahrrad & co)"
      title={'km'}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="relative flex h-96 flex-1 flex-col rounded bg-white p-2 md:h-[32rem]">
            <div className="absolute top-0 left-0 flex h-full w-full">
              <MuensterBackground className="h-full w-full flex-1" />
              <div className="w-14"></div>
            </div>
            <div className="w-full flex-1 pb-12">
              <ModalSplitChart />
            </div>
          </div>
        </div>
        <div className="w-72 flex-none py-4 md:py-0 md:px-4">
          <Title as="h5" variant={'dark'}>
            Trotz einer wachsenden Zahl von Einwohner*innen sinkt die Kurve der
            CO₂-Emissionen in Münster. Das zeigt: Münsteraner*innen setzen mehr
            und mehr Klimaschutz-Maßnahmen um. Mit dem Ziel der Klimaneutralität
            bis 2030 soll die Kurve nun nochmals deutlich steiler sinken.
          </Title>
        </div>
      </div>
    </MobilityTile>
  )
}
