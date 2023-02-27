/* eslint-disable class-methods-use-this */
import { KEYBOARD_KEY_CODE } from 'enums'

type HandleCtrlAltKeyType = {
  event: KeyboardEvent
  callback: () => void
}

class KeyboardShortcuts {
  private isKeyboardKeyClicked({ event, key }: { event: KeyboardEvent; key: KEYBOARD_KEY_CODE }) {
    return event.code === key
  }

  private ctrl_alt_key({ event, key, callback }: HandleCtrlAltKeyType & { key: KEYBOARD_KEY_CODE }) {
    const isCtrlAlt = event.ctrlKey && event.altKey
    const isKeyboardKeyClicked = this.isKeyboardKeyClicked({ event, key })

    if (isCtrlAlt && isKeyboardKeyClicked) {
      event.preventDefault()

      callback()
    }
  }

  ctrl_alt_f1({ event, callback }: HandleCtrlAltKeyType) {
    this.ctrl_alt_key({ event, callback, key: KEYBOARD_KEY_CODE.F1 })
  }

  ctrl_alt_s({ event, callback }: HandleCtrlAltKeyType) {
    this.ctrl_alt_key({ event, callback, key: KEYBOARD_KEY_CODE.S })
  }

  ctrl_alt_o({ event, callback }: HandleCtrlAltKeyType) {
    this.ctrl_alt_key({ event, callback, key: KEYBOARD_KEY_CODE.O })
  }

  ctrl_alt_b({ event, callback }: HandleCtrlAltKeyType) {
    this.ctrl_alt_key({ event, callback, key: KEYBOARD_KEY_CODE.B })
  }

  ctrl_alt_q({ event, callback }: HandleCtrlAltKeyType) {
    this.ctrl_alt_key({ event, callback, key: KEYBOARD_KEY_CODE.Q })
  }
}

export const keyboardShortcutsInstance = new KeyboardShortcuts()
