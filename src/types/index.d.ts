declare interface NavigationLinksTypes {
  href: string;
  label: string;
  sublink?: { href: string; label: string }[];
}

declare interface DemoDataType {
  firstName: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  message: string;
  title: string;
}

declare interface WaitlistDataType {
  title: string;
  email: string;
  firstName: string;
  businessName: string;
  phoneNumber: string;
}

declare interface NavbarLink {
  label: string;
  href?: string;
  dropdown?: { href: string; title: string; description: string }[];
}

declare interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  status: "draft" | "published";
  imageUrl?: string;
  author: string;
  created_at: string;
  updated_at: string;
}
