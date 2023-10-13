import { Button } from "@mui/material";
import { InputDefault } from "./DefaultInput";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./Select";
import { CaretDown } from "./Select/CaretDown";

export const SelectAndInput = () => {
    return (
        <div className="flex flex-col w-[300px] h-[400px] bg-white justify-items-center justify-center items-center gap-4">
            <InputDefault label="teste" placeholder="teste" />
            <Select>
                <SelectTrigger icon={<CaretDown className="h-4 w-4 text-gray-700 opacity-50" />} className="w-14"> 
                    <SelectValue placeholder="0" />      
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={5}>
                    <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button onClick={() => console.log('clique')} variant="contained" className="bg-red-600">button test</Button>
        </div>
    )
};