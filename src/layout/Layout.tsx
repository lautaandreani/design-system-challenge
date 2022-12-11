type Props = {
  children: JSX.Element | JSX.Element[]
}

function Layout({ children }: Props) {
  return (
    <main className='flex gap-10 min-h-screen p-10'>
      <div className='wrapper flex flex-col gap-4'>
        <aside>
          <strong className='text-brand-200 font-display font-bold text-xl'>
            <span className='text-brand-100 tracking-wide'>Dev</span>
            challenges.io
          </strong>

          <nav className='mt-20'>
            <ul className='flex flex-col gap-10 text-gray-600'>
              <li>Colors</li>
              <li>Typograhpy</li>
              <li>Spaces</li>
              <strong className='text-black'>Buttons</strong>
              <li>Inputs</li>
              <li>Grid</li>
            </ul>
          </nav>
        </aside>
      </div>

      <div>
        <h2 className='text-gray font-medium text-2xl mb-6'>Buttons</h2>
        {children}
      </div>
    </main>
  )
}

export default Layout
