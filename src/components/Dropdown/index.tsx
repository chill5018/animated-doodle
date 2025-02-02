"use client";

import { useState, useRef, useEffect } from "react";

import ChevronDown from "public/chevron-down.svg";
import { Typography } from "../Typography";
import { TextVariants } from "../Typography/types";
import { useClickOutside } from "@/hooks/handleClickOutside";
import { DropdownOptions, DropdownOptionType } from "./DropdownOptions";

export interface DropdownProps<T> {
  options: DropdownOptionType[];
  onSelect: (option: DropdownOptionType) => void;
  label?: string;
  placeholder?: string;
}

export const Dropdown = <T extends { title: string; subTitle?: string }>({
  options,
  onSelect,
  label = "Select an option",
  placeholder = "Choose an option",
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOptionType | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (option: DropdownOptionType) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && <Typography variant={TextVariants.label16}>{label}</Typography>}

      <DropdownTrigger
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        selected={selected ? selected.title : placeholder}
      />


      {isOpen && <DropdownOptions options={options} onClick={handleSelect} selected={selected} />}
    </div>
  );
};

const DropdownTrigger = ({ isOpen, onClick, selected }: { isOpen: boolean; onClick: () => void; selected: string }) => (
  <button
    className="h-12 w-full flex justify-between items-center px-4 rounded-2xl bg-dropdown focus:bg-dropdown-focused transition-colors duration-200"
    onClick={onClick}
    aria-expanded={isOpen}
  >
    <Typography>{selected}</Typography>
    <ChevronDown />
  </button>
);
