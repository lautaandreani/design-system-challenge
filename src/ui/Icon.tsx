type Props = {
  icon: string
  size: string
}

function Icon({ icon, size }: Props) {
  const iconSize = new Map([
    ['sm', 'text-sm'],
    ['md', 'text-lg'],
    ['lg', 'text-md'],
  ])

  return <span className={`material-symbols-outlined ${iconSize.get(size)}`}>{icon}</span>
}

export default Icon
