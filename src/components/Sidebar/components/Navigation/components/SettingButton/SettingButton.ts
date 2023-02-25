import { Button } from 'components/Button'
import { Drawer } from 'components/Drawer'
import { getTruthyClasses } from 'helpers'
import { t } from 'i18n'
import { type PropsWithClassname } from 'types'

export const SettingButton = ({ classname }: PropsWithClassname) => {
  const modal = Drawer({
    children: t('modal.settings.content'),
    title: t('modal.settings.title'),
  })

  return Button({
    children: t('button.setting'),
    appearanceType: 'none',
    color: 'blue',
    weight: 700,
    classname: getTruthyClasses(['relative', classname]),
    onclick: modal.handleOpen,
  })
}
