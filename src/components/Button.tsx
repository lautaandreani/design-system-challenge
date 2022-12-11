import Icon from '../ui/Icon'

import type { Color, Size, Variant } from '../models/types'

type Props = {
  children: JSX.Element | string
  variant?: Variant
  color?: Color
  size?: Size
  disabled?: boolean
  startIcon?: string
  endIcon?: string
}

function Button({ children, variant, disabled, size = 'md', color = 'default', startIcon, endIcon }: Props) {
  const sizeBtn = new Map<Size, string>([
    ['sm', 'py-2 px-3'],
    ['md', 'py-2 px-4'],
    ['lg', 'py-3 px-5'],
  ])

  const colors = new Map<Color, string>([
    ['default', 'text-text bg-btn-default-simple hover:bg-btn-default-hover'],
    ['primary', 'text-white bg-btn-primary-simple hover:bg-btn-primary-hover'],
    ['secondary', 'text-white bg-btn-secondary-simple hover:bg-btn-secondary-hover'],
    ['danger', 'text-white bg-btn-danger-simple hover:bg-btn-danger-hover'],
  ])

  const defaultStyle = `font-body rounded-md font-medium shadow-md transition flex justify-center items-center gap-1 ${sizeBtn.get(
    size
  )}`

  const variants = new Map<Variant, string>([
    ['outline', 'border shadow-none bg-transparent'],
    ['text', 'border-none bg-transparent shadow-none'],
  ])

  if (disabled)
    return (
      <button
        className={`${defaultStyle} ${variant && variants.get(variant)} text-disabled bg-btn-default-simple pointer-events-none`}
      >
        {children}
      </button>
    )

  if (variant)
    return (
      <button className={`${defaultStyle} ${variants.get(variant)} ${colors.get(color)}`}>
        {startIcon && <Icon icon={startIcon} size={size} />}
        {children}
        {endIcon && <Icon icon={endIcon} size={size} />}
      </button>
    )

  return (
    <button className={`${defaultStyle} ${colors.get(color)}`}>
      {startIcon && <Icon icon={startIcon} size={size} />}
      {children}
      {endIcon && <Icon icon={endIcon} size={size} />}
    </button>
  )
}

export default Button
