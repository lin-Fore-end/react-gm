import React from 'react'
import UndoManager from './undo_manager'

const undoManager = new UndoManager()
undoManager.setLimit(30)

const IdContext = React.createContext(null)

const KEYBOARD_TABLE_ONFOCUS = 'KEYBOARD_TABLE_ONFOCUS_'
const KEYBOARD_TABLE_DIRECTION = 'KEYBOARD_TABLE_DIRECTION_'
const KEYBOARD_TABLE_ENTER = 'KEYBOARD_TABLE_ENTER_'
const KEYBOARD_TABLE_TAB = 'KEYBOARD_TABLE_TAB_'

export {
  IdContext,
  KEYBOARD_TABLE_ONFOCUS,
  KEYBOARD_TABLE_DIRECTION,
  KEYBOARD_TABLE_ENTER,
  KEYBOARD_TABLE_TAB,
  undoManager
}
