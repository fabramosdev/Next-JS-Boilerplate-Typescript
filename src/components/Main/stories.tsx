import { text, withKnobs } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
}

export const Basic = () => (
  <Main
    title={text('Título', 'React Avançado')}
    description={text(
      'Descrição',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
)
