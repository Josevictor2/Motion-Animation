import { InputDefault } from "./DefaultInput";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./Select";

export const SelectAndInput = () => {
    return (
        <div className="flex flex-col w-[300px] h-[400px] bg-white justify-items-center justify-center items-center gap-4">
            <InputDefault label="teste" placeholder="teste" />
            <Select>
                <SelectTrigger> 
                    <SelectValue placeholder="cidade" />      
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={5}>
                    <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
};