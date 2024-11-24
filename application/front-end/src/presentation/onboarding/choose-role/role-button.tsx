import { Button } from "@/presentation/components/ui/button";

interface RoleButtonProps {
	text: string;
}

export const RoleButton = ({ text }: RoleButtonProps) => {
		return (
			<Button className="flex w-full items-center gap-2">
				<span>{text}</span>
			</Button>
		);
}
