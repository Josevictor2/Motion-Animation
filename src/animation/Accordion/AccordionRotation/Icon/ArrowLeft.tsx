import { SVGAttributes } from 'react';

type SvgProps = SVGAttributes<HTMLOrSVGElement>;

export const SvgArrowLeft = (props: SvgProps) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
      <path d="M18.75 36l-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95z" />
    </svg>
  )
}
