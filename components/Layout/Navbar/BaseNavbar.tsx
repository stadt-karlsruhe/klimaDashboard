import Image from 'next/image'
import StairStepBackground from '../StairStepBackground'
import KALogo from '@/assets/logos/logo_karlsruhe.svg'
import Link from 'next/link'
import Collapsible from '../../Elements/Collapsible'
import Container from '../Container'
import {
  BicycleIcon,
  BuildingIcon,
  EnergyIcon,
  MuensterIcon,
  // KaIcon,
} from '@/components/Icons'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Title from '@/components/Elements/Title'
import LinkComponent, { LinkProps } from './LinkComponent'
import { Spacer } from '@/components/Elements/Spacer'

const links: LinkProps[] = [
  {
    title: 'Klima in Karlsruhe',
    icon: MuensterIcon,
    link: '/klima',
    hover: 'climate',
  },
  {
    title: 'Energie',
    icon: EnergyIcon,
    link: '/energie',
    hover: 'energy',
  },
  {
    title: 'Mobilität',
    icon: BicycleIcon,
    link: '/mobilitaet',
    hover: 'mobility',
  },
  {
    title: 'Gebäude',
    icon: BuildingIcon,
    link: '/gebaeude',
    hover: 'buildings',
  },
]

type BaseNavbarProps = {
  actionComponent?: React.ReactElement
  variant?: 'primary' | 'secondary' | 'overlay'
  children?: React.ReactElement | React.ReactElement[]
}

export default function BaseNavbar({
  actionComponent,
  variant = 'primary',
  children,
}: BaseNavbarProps) {
  return (
    <div className="pt-8">
      <div className="container relative z-10 mx-auto translate-y-1/2 px-4 md:px-12">
        <Image
          alt="Logo der Stadt Karlsruhe"
          className="ml-auto h-12 w-auto"
          src={KALogo}
        />
      </div>
      <StairStepBackground variant={variant}>
        <Container>
          <div className="xl:hidden">
            <Collapsible
              trigger={
                <div className="w-fit rounded-full border-2 border-primary p-2">
                  <Bars3Icon className="w-5 stroke-2 text-primary" />
                </div>
              }
            >
              <div className="my-4 flex flex-col gap-2 md:flex-row">
                {links.map(l => (
                  <LinkComponent key={l.link} {...l} />
                ))}
              </div>
            </Collapsible>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link href={'/'}>
              <Title
                as="h2"
                variant={variant === 'overlay' ? 'inverse' : 'primary'}
              >
                Klimadashboard Karlsruhe
              </Title>
            </Link>
            <div className="flex items-center justify-between">
              {actionComponent}

              <div className="hidden h-fit flex-wrap gap-2 xl:flex">
                {links.map(l => (
                  <LinkComponent
                    key={l.link}
                    variant={variant === 'overlay' ? 'inverse' : 'primary'}
                    {...l}
                  />
                ))}
              </div>
            </div>
          </div>
          {children && (
            <>
              <Spacer size={'xl'} />
              {children}
            </>
          )}
        </Container>
      </StairStepBackground>
    </div>
  )
}
