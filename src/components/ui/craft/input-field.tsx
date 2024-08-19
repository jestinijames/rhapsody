import { cn } from '@/lib/utils';

const InputField = ({
  placeholder,
  type,
  className,
  ...props
}: {
  placeholder: string;
  type: string;
  className: string;
}) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      name={type}
      required
      className={cn(
        `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `
      )}
    />
  );
};

export default InputField;
