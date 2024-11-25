import { RoleCard } from '@/presentation/signin/components/role-card';

export default function ChooseRolePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <RoleCard
        role={'mentor'}
        title={'Partage ton savoir !'}
        description={
          "Tu as de l'expérience ? Inspire et aide les juniors à progresser dans leur carrière et leur vie professionnelle."
        }
      />
      <RoleCard
        role={'mentee'}
        title={'Booste ta carrière !'}
        description={
          ' Débute ta carrière avec succès ! Apprends des meilleures pratiques et sois guidé par des experts sur les bonnes pratiques.'
        }
      />
    </div>
  );
}
