import React from "react"
import { cn } from "../../utils/mergeCss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
    indexAcessible: number;
  }

const InputSubVariant = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, text, indexAcessible, ...props }, ref) => {
    return (
      <div className="relative mt-6">
        <input
        placeholder={text}
        className={
          cn("peer mt-1 w-full border-b-2 border-green-300 px-0 py-1 placeholder:text-transparent focus:border-green-500 focus:outline-none text-black",
          className)}
        autoComplete="NA"
        ref={ref}
        {...props}
        />
        <label htmlFor={text} className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-800">
          {text}
        </label>
      </div>
    )
  }
)

InputSubVariant.displayName = "SubVariantInput"

export { InputSubVariant }
