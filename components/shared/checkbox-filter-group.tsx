"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
};

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('')

  const list = showAll ? items.filter(item=>item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value)
  }
  return (
    <div className={className}>
      <p className="font-bold mb-3"> {title}</p>
      {showAll && (<div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          onChange={(e)=>onChangeSearchValue(e.target.value)}
          className="bg-gray-50 border-none"
        />
      </div>)}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {
        items.length > limit && (
            <div className={showAll?'border-t border-t-neutral-100 mt-4':''}>
                <button onClick={()=>setShowAll(!showAll)} className="text-primary mt-3">
                    {showAll?'Hide':'+ Show all'}
                </button>
            </div>
        )
      }
    </div>
  );
};
