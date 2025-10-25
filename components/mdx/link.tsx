import { Link } from "@/i18n/naviguation";

type PostLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function PostLink({ href, ...props }: PostLinkProps) {
  return (
    <Link href={href} {...props}>
      {props.children}
    </Link>
  );
}
