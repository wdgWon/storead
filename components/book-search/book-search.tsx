"use client";

import { useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function BookSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnFocus = () => {
    setIsOpen(true);
  };

  const handleOnBlur = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Command className="min-w-96">
        <CommandInput
          placeholder="Type a command or search..."
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {isOpen && (
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}

export default BookSearch;
