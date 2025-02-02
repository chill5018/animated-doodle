import { JSX } from "react";
import { TextVariants, TypographyProps } from "./types"
import styles from './styles.module.css';

export const Typography = ({
  variant = TextVariants.standard20,
  color = "primary",
  className,
  children }: TypographyProps) => {

  const Tag: keyof JSX.IntrinsicElements = (() => {
    switch (variant) {
      case 'title20':
        return 'h4';
      case 'label16':
        return 'label';
      default:
        return 'p';
    }

  })()

  const classes = `${styles.typography} ${styles[variant]} ${styles[color]} ${className || ""}`.trim();

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  )
}
