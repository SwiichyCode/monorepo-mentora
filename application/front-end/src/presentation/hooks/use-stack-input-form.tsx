'use client';

import { useState } from 'react';

type StackInputFormReturn = [
  string,
  (value: string) => void,
  (tag: string) => void,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
];

export const useStackInputForm = ({
  value,
  onChange,
}: {
  value: string[];
  onChange: (value: string[]) => void;
}): StackInputFormReturn => {
  const [pendingStack, setPendingStack] = useState('');

  const addTag = () => {
    if (pendingStack.trim() && !value.includes(pendingStack.trim())) {
      onChange([...value, pendingStack.trim()]);
      setPendingStack('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    onChange(value.filter(t => t !== tag));
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  return [pendingStack, setPendingStack, handleRemoveTag, handleAddTag];
};
