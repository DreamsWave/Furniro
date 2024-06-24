import { Control } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FieldInputProps<T extends z.ZodTypeAny> {
  formControl: Control<z.infer<T>>;
  name: string;
  label?: string;
  placeholder?: string;
  multiline?: boolean;
}

const FieldInput = <T extends z.ZodTypeAny>({
  formControl,
  name,
  label,
  placeholder = "",
  multiline = false,
}: FieldInputProps<T>) => {
  return (
    <FormField
      control={formControl}
      // @ts-expect-error hide unimportant warning about type
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-5">
          {label && (
            <FormLabel className="font-poppinsMedium text-base">
              {label}
            </FormLabel>
          )}
          <FormControl>
            {!multiline ? (
              <Input
                placeholder={placeholder}
                {...field}
                className="h-[75px] rounded-[10px] border-text-color-400 px-8 py-4 text-base text-text-color-100 placeholder:text-text-color-400"
              />
            ) : (
              <Textarea
                placeholder={placeholder}
                {...field}
                className="min-h-[150px] rounded-[10px] border-text-color-400 px-8 py-6 text-base text-text-color-100 placeholder:text-text-color-400"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FieldInput;
