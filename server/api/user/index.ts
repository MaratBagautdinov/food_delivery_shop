import { T_User } from "~/types"

export default defineEventHandler<T_User[]>((event) => {
    return [
        {
            id:"1",
            name: "Марат"
        },
        {
            id:"2",
            name: "_ananimus"
        }
    ]
  })