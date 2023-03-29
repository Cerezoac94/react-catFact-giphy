import { useState, createContext } from "react";
export const reset = createContext()

const { Provider } = reset

const Reset = ({ children }) => {
const [ flag, setFlag ] = useState(false)
const handleFlag = () => {
  setFlag(!flag)
}

const reset = {
  handleFlag,
  flag
}

return <Provider value={reset}> { children } </Provider>

}

export default Reset;