export interface Profile {
  id: number;
  bio: String;
  profileImageUrl: string;
  userId: number;
  user: UserType;
}

export interface UserType {
  id: number;
  username: String;
  email: string;
  password: string;
  posts: PostType[];
  profile: Profile;
}

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  authorId: number;
  author: UserType;
}
