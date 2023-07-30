import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, FC } from "react";
import { useRouter } from "next/router";
import { forwardRef} from "react"

import { cn } from "../../utils/mergeCss";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;


interface ActiveLinkProps extends Props {
    activeClassName?: string;
}
  
const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(({className, activeClassName, href, ...props}, ref) => {
    const router = useRouter();
    const active = router.pathname.startsWith(href);

    return (
    <Link ref={ref} href={href} className={cn(className, active && activeClassName)} >
        {props.children}
    </Link>
    )
})

ActiveLink.displayName = "ActiveLink";

export { ActiveLink }

