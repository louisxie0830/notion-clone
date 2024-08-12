import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Spinner variant styles using class-variance-authority.
 * 
 * @type {ReturnType<typeof cva>}
 */
const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "default"
  },
});

/**
 * Props for the Spinner component, extending the variant props of spinnerVariants.
 *
 * @interface SpinnerProps
 * @extends {VariantProps<typeof spinnerVariants>}
 */
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

/**
 * Spinner component to display a loading spinner with configurable size.
 *
 * @param {SpinnerProps} props - The properties for the Spinner component.
 * @param {string} [props.size] - The size variant of the spinner. Can be "default", "sm", "lg", or "icon".
 * @returns {JSX.Element} The rendered Spinner component.
 */
export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};