"use client"
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { AutoComplete, Option } from '../Autocomplete';

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

const DialogDemo = () => {
  const [isLoading, setLoading] = useState(false)
  const [isDisabled, setDisbled] = useState(false)
  const [value, setValue] = useState<Option>()
  return <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
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
        <span className="text-sm">Valor Atual: {value ? value?.value : "No value selected"}</span>
        <span className="text-sm">Carregando: {isLoading ? "true" : "false"}</span>
        <span className="text-sm">Desabilitado: {isDisabled ? "true" : "false"}</span>
      </div>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
};

export default DialogDemo;