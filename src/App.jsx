import { useState } from "react"
import Cards from "./components/cards/Cards"
import Form from "./components/form/Form"

export default function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  return (
    <>
      <Cards
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />

      <Form
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCvc={setCvc}
      />
    </>
  )
}