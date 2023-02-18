import { Button } from 'components/Button'

export const DeleteButton = () =>
  Button({ appearanceType: 'alert', children: 'delete', textTransform: 'uppercase', weight: 700 })
