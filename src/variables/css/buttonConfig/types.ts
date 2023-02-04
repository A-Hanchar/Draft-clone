export type ButtonTypeClose = 'close'
export type ButtonTypePositionClose = 'absolute' | 'relative'
export type ButtonTypeCloseColor = 'red'

type CloseButtonConfig = {
  wrap: {
    position: Record<ButtonTypePositionClose, string>
    classes: string
  }
  after: string
  before: string
  color: Record<ButtonTypeCloseColor, string>
}

export type ButtonTypeGeneral = 'primary' | 'alert' | 'success'
type ButtonTypeGeneralColorsKeys = 'color' | 'bgColor' | 'outline'

export type ButtonType = ButtonTypeClose | ButtonTypeGeneral

export type ButtonConfigType = {
  buttonType: Record<ButtonTypeGeneral, Record<ButtonTypeGeneralColorsKeys, string>> &
    Record<ButtonTypeClose, CloseButtonConfig>
  commonStyles: string
  getClassByColorType: (params: { colorType: ButtonTypeGeneral }) => string
  getClassesForCloseButton: (params: { position: ButtonTypePositionClose; color: ButtonTypeCloseColor }) => string
}
