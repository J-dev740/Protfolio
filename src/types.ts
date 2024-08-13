import { ComponentProps } from "react";

export type SectionProps=ComponentProps<'div'> & {
    title:string
}