export class User {
  readonly id: string;
  readonly name: string | null;
  readonly email: string | null;
  readonly emailVerified: Date | null;
  readonly image: string | null;
  readonly picture: string | null;
  readonly pseudo: string;
  readonly bio: string | null;
  readonly stacks: string[] | null;
  readonly expertise: Expertise[] | null;
  readonly linkedin: string | null;
  readonly twitter: string | null;
  readonly github: string | null;
  readonly website: string | null;
  readonly role: Role;

  constructor(props: User) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.emailVerified = props.emailVerified;
    this.image = props.image;
    this.picture = props.picture;
    this.pseudo = props.pseudo;
    this.bio = props.bio;
    this.stacks = props.stacks;
    this.expertise = props.expertise;
    this.linkedin = props.linkedin;
    this.twitter = props.twitter;
    this.github = props.github;
    this.website = props.website;
    this.role = props.role;
  }
}

export type Role = 'MENTOR' | 'MENTEE' | 'ADMIN';

export type Expertise = 'FRONTEND' | 'BACKEND' | 'FULLSTACK';
