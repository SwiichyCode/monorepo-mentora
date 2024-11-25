import { RoleCard } from "@/presentation/onboarding/choose-role/role-card";

export default function ChooseRolePage() {
	return (
		<div className="flex lg:flex-row flex-col items-center justify-center gap-8">
			<RoleCard role={'mentor'} text={'mentor'} />
			<RoleCard role={'mentee'} text={'mentee'} />
		</div>
	);
}
