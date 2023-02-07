export type ButtonTypeClose = 'close'
export type ButtonTypePositionClose = 'absolute' | 'relative'
export type ButtonTextColor = 'red' | 'green' | 'blue' | 'lightGray' | 'darkGray'

type CloseButtonConfig = {
  wrap: {
    position: Record<ButtonTypePositionClose, string>
    classes: string
  }
  after: string
  before: string
}

export type ButtonTypeGeneral = 'primary' | 'alert' | 'success'
type ButtonTypeGeneralColorsKeys = 'color' | 'bgColor' | 'outline'

export type ButtonType = ButtonTypeClose | ButtonTypeGeneral

export type ButtonConfigType = {
  buttonType: Record<ButtonTypeGeneral, Record<ButtonTypeGeneralColorsKeys, string>> &
    Record<ButtonTypeClose, CloseButtonConfig>
  commonStyles: string
  color: Record<ButtonTextColor, string>
  getClassByColorType: (params: { colorType: ButtonTypeGeneral }) => string
  getClassesForCloseButton: (params: { position: ButtonTypePositionClose; color: ButtonTextColor }) => string
}
