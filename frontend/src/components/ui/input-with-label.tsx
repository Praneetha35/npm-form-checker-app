import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon } from "@heroicons/react/24/solid"; // Assuming you're using Heroicons
import { EyeOffIcon } from "lucide-react";

interface InputWithLabelProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithLabel({
  label,
  type,
  id,
  placeholder,
  name,
  value,
  onChange,
}: InputWithLabelProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-sm">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center">
        <Input
          type={showPassword ? "text" : type}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full pr-10"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3"
          >
            {showPassword ? (
              <EyeOffIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <EyeIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
