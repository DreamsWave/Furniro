import { Control } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { checkoutScheme } from "../pages/Checkout/checkoutScheme";

interface FieldInputProps<T extends z.ZodTypeAny> {
  formControl: Control<z.infer<T>>;
  name: keyof z.infer<typeof checkoutScheme>;
  label: string;
  placeholder?: string;
  values: Array<{ value: string; label: string }>;
  notFound?: string;
  onSelect: (value: string) => void;
}

const FieldSelect = <T extends z.ZodTypeAny>({
  formControl,
  name,
  label,
  placeholder,
  values,
  notFound = "Not found.",
  onSelect,
}: FieldInputProps<T>) => {
  const [open, setOpen] = useState(false);
  const { formItemId } = useFormField();
  return (
    <FormField
      control={formControl}
      // @ts-expect-error hide unimportant warning about type
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col space-y-5">
          <FormLabel className="font-poppinsMedium text-base">
            {label}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id={formItemId}
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  "h-[75px] justify-between rounded-[10px] border-text-color-400 px-8 py-4 text-base text-text-color-100",
                  !field.value && "text-text-color-400",
                )}
              >
                {field.value
                  ? values.find((v) => v.value === field.value)?.label
                  : placeholder
                    ? placeholder
                    : "Select..."}
                <ChevronDown
                  size={30}
                  className="ml-2 h-4 w-4 shrink-0 stroke-black opacity-50"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search country..." />
                <CommandList>
                  <CommandEmpty>{notFound}</CommandEmpty>
                  <CommandGroup>
                    {values.map((v) => (
                      <CommandItem
                        key={v.value}
                        value={v.value}
                        onSelect={(currentValue) => {
                          onSelect(currentValue);
                          setOpen(false);
                        }}
                        className="h-[50px]"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value === v.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {v.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FieldSelect;
