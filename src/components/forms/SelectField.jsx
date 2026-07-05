"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function SelectField({
  options,
  value,
  onChange,
  onBlur,
  placeholder = "Select an option",
  name,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const listboxId = useId();

  const selectedOption = options.find((option) => option.value === value) ?? null;

  useEffect(() => {
    if (!isOpen) return;

    listRef.current?.focus();

    function handleClickOutside(event) {
      if (!triggerRef.current?.contains(event.target) && !listRef.current?.contains(event.target)) {
        setIsOpen(false);
        onBlur?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onBlur]);

  function openList() {
    setIsOpen(true);
    const currentIndex = options.findIndex((option) => option.value === value);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }

  function closeList({ refocusTrigger = true } = {}) {
    setIsOpen(false);
    onBlur?.();
    if (refocusTrigger) triggerRef.current?.focus();
  }

  function selectOption(option) {
    onChange(option.value);
    closeList();
  }

  function handleTriggerKeyDown(event) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      if (!isOpen) {
        openList();
      }
    }
  }

  function handleListKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (options[activeIndex]) selectOption(options[activeIndex]);
        break;
      case "Escape":
        event.preventDefault();
        closeList();
        break;
      case "Tab":
        closeList({ refocusTrigger: false });
        break;
      default:
        break;
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        id={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => (isOpen ? closeList() : openList())}
        onKeyDown={handleTriggerKeyDown}
        className="flex h-12 w-full items-center justify-between rounded-lg border border-border bg-white px-4 text-left text-sm text-secondary-900 outline-none transition-colors duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
      >
        <span className={selectedOption ? "text-secondary-900" : "text-text-light/70"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-text-light transition-transform duration-300 ease-premium ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          onKeyDown={handleListKeyDown}
          className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-border bg-white p-2 shadow-card animate-fade-down"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <li
                key={option.value}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-secondary-900 text-white"
                    : "text-secondary-800 hover:bg-secondary-900 hover:text-white"
                }`}
              >
                {option.label}
                {isSelected && <Check className="size-4 shrink-0" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
