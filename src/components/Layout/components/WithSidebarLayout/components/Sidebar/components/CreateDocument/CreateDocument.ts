import { Button } from 'components/Button'

export const CreateDocument = () =>
  Button({
    appearanceType: 'success',
    children: 'New Document',
    textTransform: 'uppercase',
    classname: 'self-start',
    rounded: false,
  })
