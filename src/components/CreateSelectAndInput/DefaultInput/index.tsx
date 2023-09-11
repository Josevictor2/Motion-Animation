import React, { forwardRef } from 'react';
import { cn } from '../../../utils/mergeCss';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputDefault = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, type = 'text', ...props }, ref) => {
        const inputClasses = cn(
            'peer w-full caret-gray-400 px-3 rounded-md text-gray-700',
            'border border-gray-400 bg-transparent h-14 shadow shadow-gray-100',
            'placeholder:text-transparent focus:border-orange-500 focus:outline-none',
            className,
        );

        return (
            <div className="relative">
                <input
                    type={type}
                    className={inputClasses}
                    autoComplete="off"
                    ref={ref}
                    {...props}
                />
                <label
                    htmlFor={label}
                    className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-800 transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-orange-500"
                >
                    {label}
                </label>
            </div>
        );
    },
);

InputDefault.displayName = 'InputDefault';

export { InputDefault };
