import Link from 'next/link'
import {
  ArrowDownTrayIcon,
  ShareIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import MoreDetails from '@/components/Elements/MoreDetails'
import { cva, VariantProps } from 'class-variance-authority'

const tileFooterStyle = cva('flex flex-1 space-x-1', {
  variants: {
    variant: {
      primary: 'text-primary',
      inverse: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type TileFooterProps = VariantProps<typeof tileFooterStyle> & {
  onEmbedClick?: () => void
  onMoreInfoClick?: () => void
  onShareClick?: () => void
  children?: React.ReactElement
  dataURL?: string
  hasMoreDetails?: boolean
}

/**
 * A footer for all tiles with sharing, export and embed button as well as a more information link
 * @returns TileFooter
 */
export default function TileFooter({
  onEmbedClick,
  onMoreInfoClick,
  onShareClick,
  children,
  variant,
  dataURL,
  hasMoreDetails,
}: TileFooterProps) {
  function IconButtons() {
    return (
      <div className={tileFooterStyle({ variant })}>
        <SquaresPlusIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onEmbedClick}
        />
        <ShareIcon
          className="h-6 cursor-pointer stroke-2"
          onClick={onShareClick}
        />
        {dataURL && (
          <Link href={dataURL} target="_blank">
            <ArrowDownTrayIcon className="h-6 stroke-2" />
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="mt-6  ">
      <div className="hidden w-full flex-row items-center justify-between gap-2 md:flex">
        <IconButtons />
        <div className="flex flex-[2_2_0%] justify-center">{children}</div>
        {hasMoreDetails && (
          <div className="flex flex-1 justify-end" onClick={onMoreInfoClick}>
            <MoreDetails variant={variant} />
          </div>
        )}
        {!hasMoreDetails && <div className="flex flex-1 justify-end"></div>}
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        <IconButtons />

        <div className="flex w-full items-center justify-between">
          {hasMoreDetails && (
            <div
              className="flex flex-1 justify-start"
              onClick={onMoreInfoClick}
            >
              <MoreDetails variant={variant} />
            </div>
          )}
          {!hasMoreDetails && <div className="flex flex-1 justify-start"></div>}
          <div className="flex flex-1 justify-end">{children}</div>
        </div>
      </div>
    </div>
  )
}
