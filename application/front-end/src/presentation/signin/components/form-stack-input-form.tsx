import { Badge } from '@/presentation/components/ui/badge';
import { useStackInputForm } from '@/presentation/hooks/use-stack-input-form';

type StackInputFormProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export const StackInputForm = ({ value, onChange }: StackInputFormProps) => {
  const [pendingStack, setPendingStack, handleRemoveTag, handleAddTag] = useStackInputForm({ value, onChange });

  return (
    <div className="flex flex-wrap gap-2 border rounded-md shadow-sm p-2">
      <input
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="Ajouter un tag"
        value={pendingStack}
        onChange={e => setPendingStack(e.target.value)}
        onKeyDown={e => handleAddTag(e)}
      />
      {value.map(tag => (
        <Badge key={tag} variant="secondary">
          {tag}
          <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-2 text-red-500 hover:text-red-700">
            &times;
          </button>
        </Badge>
      ))}
    </div>
  );
};
