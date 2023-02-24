import { Button } from 'components/Button'
import { en } from 'langs'

export const DeleteButton = () =>
  Button({ appearanceType: 'alert', children: en.button.delete, textTransform: 'uppercase', weight: 700 })
