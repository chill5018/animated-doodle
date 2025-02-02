
export type TypographyProps = {
  children: React.ReactNode;
  variant?: TextVariants;
  color?: 'primary' | 'secondary';
  className?: string;
}


export enum TextVariants {
  label16 = 'label16',
  standard20 = 'standard20',
  title20 = 'title20',
  subTitle20 = 'subTitle20',

}
