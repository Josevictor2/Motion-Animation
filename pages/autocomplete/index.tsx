"use client"

import { useState } from "react"
import { AutoComplete, Option } from "../../src/components/Autocomplete"
import DialogDemo from "../../src/components/modal"

const FRAMEWORKS = [
  {
    value: "São miguel",
  },
  {
    value: "iracema",
  },
  {
    value: "Pereiro",
  },
  {
    value: "alto santos",
  },
  {
    value: "Pau dos ferros",},
  {
    value: "nuxt.js",
  },
  {
    value: "remix", 
  },
  {
    value: "astro", 
  },
  {
    value: "wordpress",  
  },
  {
    value: "express.js",
  },
  {
    value: "nest.js",
  },
]

export default function Post() {
  const [isLoading, setLoading] = useState(false)
  const [isDisabled, setDisbled] = useState(false)
  const [value, setValue] = useState<Option>()

  return (
    <main className="mx-auto my-12 max-w-[33.75rem] px-6 text-black antialiased sm:my-32">
      <header className="flex flex-col gap-2 items-start mt-6">
        <p>
         autocomplete feito para o novo brisa site
        </p>
      </header>
      <div className="flex flex-col max-w-md gap-4">
        <AutoComplete
          options={FRAMEWORKS}
          emptyMessage="Cidade não encontrada"
          placeholder=""
          isLoading={isLoading}
          onValueChange={setValue}
          value={value}
          disabled={isDisabled}
        />
        <span className="text-sm text-gray-700">Valor Atual: {value ? value?.value : "No value selected"}</span>
        <span className="text-sm text-gray-700">Carregando: {isLoading ? "true" : "false"}</span>
        <span className="text-sm text-gray-700">Desabilitado: {isDisabled ? "true" : "false"}</span>
      </div>
      <DialogDemo />
    </main>
  )
}
