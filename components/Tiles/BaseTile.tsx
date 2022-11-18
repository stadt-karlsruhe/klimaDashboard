import clsx from 'clsx'
import TileFooter from './TileFooter'

const variants = {
  primary: 'bg-green-100 rounded-3xl',
  successStory: 'bg-blue-100 rounded-lg',
}

export type ImageProps =
  | { startImage: React.ReactElement; endImage?: never }
  | { endImage: React.ReactElement; startImage?: never }
  | { endImage?: undefined; startImage?: undefined }

export type BaseTileProps = {
  children: React.ReactElement | React.ReactElement[]
  variant?: keyof typeof variants
  className?: string
} & ImageProps

/**
 * A basic configruable tile
 * @param BaseTileProps basic properties of the tile
 * @returns BaseTile
 */
export function BaseTile({
  children,
  variant = 'primary',
  className = '',
  startImage,
  endImage,
}: BaseTileProps) {
  return (
    <div className={clsx('flex overflow-hidden', variants[variant], className)}>
      {startImage}
      <div className="flex w-full flex-col justify-between p-4">
        <div>{children}</div>
        <TileFooter />
      </div>
      {endImage}
    </div>
  )
}
