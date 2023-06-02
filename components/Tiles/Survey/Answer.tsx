'use client'

import { ComponentPropsWithRef } from 'react'
import { animated, AnimatedProps } from '@react-spring/web'
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { Spacer } from '@/components/Elements/Spacer'

export type SurveyAnswerProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  percent: number
  text: string
}

export default function SurveyAnswer({
  percent,
  text,
  ...props
}: SurveyAnswerProps) {
  return (
    <animated.div className="absolute left-0 top-0 w-full" style={{ ...props }}>
      {percent != null ? (
        <>
          <div className="space-y-1">
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <Title as="h1">
                <AnimatedNumber decimals={1}>{percent}</AnimatedNumber>
                <span className="font-normal">%</span>
              </Title>
              <Title as="h4">{text}</Title>
            </div>
            <div className="flex flex-1 space-x-2 text-xs">
              <Title as="h7" font="semibold">
                Datenstand: 2022
              </Title>
              <Title as="h7" font="normal">
                Quelle:{' '}
                <a
                  className="underline"
                  href="https://www.stadt-muenster.de/stadtentwicklung"
                >
                  https://www.stadt-muenster.de/stadtentwicklung
                </a>
              </Title>
            </div>
            <Spacer />
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Title as="h4">{text}</Title>
          </div>
        </>
      )}
    </animated.div>
  )
}
