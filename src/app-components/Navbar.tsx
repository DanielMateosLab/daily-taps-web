import { Text, View } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/new-workout", label: "New Workout" },
  ];

  const linkTemplate = (link: (typeof links)[number]) => {
    const isActiveLink = pathname === link.href;
    return (
      <Link
        className={
          isActiveLink
            ? "pointer-events-none font-semibold"
            : "opacity-70 hover:opacity-100"
        }
        href={link.href}
        key={link.href}
      >
        <Text>{link.label}</Text>
      </Link>
    );
  };

  return (
    <View as="nav" className="bg-secondary flex justify-center gap-6 px-4 py-2">
      {links.map(linkTemplate)}
    </View>
  );
};

export default Navbar;
