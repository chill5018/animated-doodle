import classNames from "classnames";
import { Typography } from "../Typography";
import { TextVariants } from "../Typography/types";

export interface DropdownOptionType {
  title: string;
  subTitle?: string;
}

export interface DropdownOptionsProps {
  options: DropdownOptionType[];
  onClick: (option: DropdownOptionType) => void;
  selected?: DropdownOptionType | null;
}

export const DropdownOptions = ({ options, onClick, selected }: DropdownOptionsProps) => {
  return (
    <div className="absolute mt-2 w-full bg-white rounded shadow-lg z-50 max-h-60 overflow-y-auto">
      {options.length > 0 ? (
        options.map((option) => (
          <DropdownOption key={option.title} option={option} onClick={onClick} isSelected={option.title === selected?.title} />
        ))
      ) : (
        <div className="px-4 py-3 text-gray-500 text-center">No options available</div>
      )}
    </div>
  );
};

export const DropdownOption = ({
  option,
  onClick,
  isSelected,
}: {
  option: DropdownOptionType;
  onClick: (option: DropdownOptionType) => void;
  isSelected: boolean;
}) => (
  <div
    className={classNames(
      "px-4 py-3 cursor-pointer transition-colors duration-150 rounded hover:bg-selected",
      { "bg-selected text-white": isSelected }
    )}
    onClick={() => onClick(option)}
  >
    <Typography variant={TextVariants.title20}>{option.title}</Typography>
    {option.subTitle && (
      <Typography className="truncate" variant={TextVariants.subTitle20}>
        {option.subTitle}
      </Typography>
    )}
  </div>
);
