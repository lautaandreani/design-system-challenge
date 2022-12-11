import Button from './components/Button'
import ButtonView from './layout/ButtonView'

import type { Color, Size } from './models/types'

function Home() {
  const colors: Color[] = ['default', 'primary', 'secondary', 'danger']
  const size: Size[] = ['sm', 'md', 'lg']
  return (
    <div className='flex flex-col gap-10'>
      <ButtonView>
        <Button>Default</Button>
      </ButtonView>

      <ButtonView properties="variant='outline'">
        <Button variant='outline'>Default</Button>
      </ButtonView>

      <ButtonView properties="variant='text'">
        <Button variant='text'>Default</Button>
      </ButtonView>

      <div className='flex gap-10 items-center'>
        <ButtonView properties='disabled'>
          <Button disabled>Default</Button>
        </ButtonView>

        <ButtonView properties="variant='text' disabled">
          <Button variant='text' disabled>
            Default
          </Button>
        </ButtonView>
      </div>

      <div className='flex gap-10 items-center'>
        <ButtonView properties='startIcon="favorite"'>
          <Button startIcon='favorite'>Default</Button>
        </ButtonView>

        <ButtonView properties='endIcon="favorite"'>
          <Button endIcon='favorite'>Default</Button>
        </ButtonView>
      </div>

      <div className='flex gap-10 items-center'>
        {size.map((size) => (
          <ButtonView properties={`size='${size}'`} key={size}>
            <Button size={size} color='primary'>
              Default
            </Button>
          </ButtonView>
        ))}
      </div>

      <div className='flex gap-10 items-center'>
        {colors.map((color) => (
          <ButtonView properties={`color='${color}'`} key={color}>
            <Button color={color}>Default</Button>
          </ButtonView>
        ))}
      </div>
    </div>
  )
}

export default Home
