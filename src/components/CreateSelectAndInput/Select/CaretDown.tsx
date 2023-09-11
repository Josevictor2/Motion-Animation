import { FC, SVGAttributes } from "react";

type SvgProps = SVGAttributes<HTMLOrSVGElement>;

export const CaretDown: FC<SvgProps> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 7" fill="none" className={className}>
            <path d="M12.3334 0.866668L7.00002 6.2L1.66669 0.866669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}