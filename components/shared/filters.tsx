import React from "react";
import { CheckboxFilterGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui/input";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Assemble" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3 ">Price from & to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <Input type="number" placeholder="100" min={5} max={100} />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFilterGroup
        title="Ingredients"
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: "Cheese souce", value: "1" },
          { text: "Mozarella", value: "2" },
          { text: "Garlik", value: "3" },
          { text: "Pickles", value: "4" },
          { text: "Red onion", value: "5" },
          { text: "Tomatoes", value: "6" },
        ]}
        items={[
          { text: "Cheese souce", value: "1" },
          { text: "Mozarella", value: "2" },
          { text: "Garlik", value: "3" },
          { text: "Pickles", value: "4" },
          { text: "Red onion", value: "5" },
          { text: "Tomatoes", value: "6" },
        ]}
      />
    </div>
  );
};
