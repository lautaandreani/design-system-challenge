type Props = {
  children: JSX.Element | JSX.Element[]
  properties?: string
}

function ButtonView({ children, properties }: Props) {
  if (properties)
    return (
      <div>
        <p className='text-sm mb-4'>{`<Button ${properties}/>`}</p>
        <span>{children}</span>
      </div>
    )

  return (
    <div>
      <p className='text-sm mb-2'>{'<Button/>'}</p>
      <span className='flex gap-10'>{children}</span>
    </div>
  )
}

export default ButtonView
