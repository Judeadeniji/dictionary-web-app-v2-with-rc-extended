import React from "react"
import { Show } from "rc-extended/components"
import { useDisplay } from "../utils";

function WordMeaningItem({ children }: { children : React.ReactNode}) {
  return (
    <li className=" grid grid-cols-[0.5rem_1fr] items-start gap-x-8 gap-y-2">
      <span className="mt-4 h-[0.5rem] w-[0.5rem] basis-[0.5rem] rounded-full bg-[#8f19e8]"></span>
      {children}
    </li>
  );
}

function Definition({ children }: { children : React.ReactNode}) {
  const { isDarkMode } = useDisplay();
  return (
    <Show when={children}>
      <span className={`mobile:text-[1.5rem] text-[1.8rem] leading-[2.4rem] transition-all duration-500 ${isDarkMode ? "text-white" : "text-2D2D2D"}`}>
        {children}
      </span>
    </Show>
  )
}
WordMeaningItem.Definition = Definition

function Example({ children }: { children : React.ReactNode }) {
  return (
    <Show when={children}>
        <span className="mobile:text-[1.5rem] col-start-2 text-[1.8rem] leading-[2.4rem] text-757575">
          "{children}"
        </span>
    </Show>
  )
}
WordMeaningItem.Example = Example

export default WordMeaningItem;
