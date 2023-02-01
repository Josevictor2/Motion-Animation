import * as React from "react"
import { cn } from "../../utils/mergeCss"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
    indexAcessible: number;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, text, indexAcessible, ...props }, ref) => {
    return (
      <div className="w-96 h-10 relative group">
        <input
        tabIndex={indexAcessible}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
        ref={ref}
        {...props}
        />
        <label htmlFor={text} className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:pb-2">
          {text}
        </label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
