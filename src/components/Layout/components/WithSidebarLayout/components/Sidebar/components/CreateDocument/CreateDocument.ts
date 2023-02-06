import { Button } from 'components/Button'

export const CreateDocument = () => {
  const button = Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
  })

  return button
}
