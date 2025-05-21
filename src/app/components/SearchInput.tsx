import { useState } from "react";
import clsx from "clsx";

export const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const [focused, setFocused] = useState(false);

  const isFloating = focused || value.length > 0;

  return (
    <div className="relative w-56 -mb-[1px]">
      <input
        type="text"
        value={value}
        autoFocus
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-gray-400 border-b border-gray-400 focus:border-black outline-none placeholder-transparent"
      />
      <label
        className={clsx(
          "absolute left-0 text-gray-400 transition-all duration-200 pointer-events-none",
          isFloating
            ? "-top-3 text-xs text-gray-600"
            : "-top-1 text-base text-gray-400"
        )}
      >
        Search...
      </label>
    </div>
  );
};
