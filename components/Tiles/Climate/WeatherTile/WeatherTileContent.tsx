'use client'

import Title from '@/components/Elements/Title'
import { SunLarge } from '@/components/Icons'
import useWeather from '@/hooks/useWeather'
import { conditionMapping } from '@/lib/brightsky'
import { addHours, format } from 'date-fns'
import { useState } from 'react'
import Phenomenon from './Phenomenon'
import Slider from '@/components/Inputs/Slider'

export default function WeatherTileContent() {
  const [timestamp, setTimestamp] = useState(new Date())

  const weather = useWeather({ lat: 52, lng: 7.6 }, timestamp)

  const nextHours = new Array(6).fill(undefined).map((e, i) => {
    const date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return addHours(date, i)
  })

  return (
    <div>
      {weather && (
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center gap-6 md:flex-col md:items-start md:justify-between md:gap-2">
            <span>
              <SunLarge className="h-20 text-primary md:h-36" />
            </span>
            <Title as={'h4'} className="my-4 w-1/3 md:w-3/4">
              In Münster ist es gerade{' '}
              <span className="text-climate">
                {conditionMapping[weather?.condition]}
              </span>
            </Title>
            <div className="hidden md:block">
              <Phenomenon
                phenomenon="temperature"
                size="xl"
                value={weather?.temperature}
              />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex-1 md:hidden">
              <Phenomenon
                phenomenon="temperature"
                size="xl"
                value={weather?.temperature}
              />
            </div>
            <div className="flex h-full w-full flex-1 flex-col justify-between gap-2.5 md:gap-6">
              <Phenomenon
                phenomenon="precipitation"
                value={weather?.precipitation}
              />
              <Phenomenon
                phenomenon="cloudcover"
                value={weather?.cloud_cover}
              />
              <Phenomenon phenomenon="windspeed" value={weather?.wind_speed} />
              {/* <Phenomenon phenomenon="sunhours" value={weather?.sunshine} /> */}
            </div>
          </div>
        </div>
      )}
      <Slider
        defaultValue={[0]}
        labels={(() => {
          const labels = nextHours.map(d => format(d, 'kk:mm'))
          labels[0] = 'jetzt'
          return labels
        })()}
        max={nextHours.length - 1}
        min={0}
        onValueChange={([e]) => {
          setTimestamp(nextHours[e])
        }}
        variant={'climate'}
      />
    </div>
  )
}
