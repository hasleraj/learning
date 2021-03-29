import { atom } from "recoil"
import ATOMS from "../../enums/atomKeys" 

const todoListAtom = atom({
  key: ATOMS.TODOLIST,
  default: []
})

export default todoListAtom