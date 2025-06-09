import { Flex } from "@components/shared";
import Link from "next/link";

export default function Header() {
  return (
    <Flex className="flex-row sticky top-0 z-50 bg-white shadow-sm">
      <nav className="ml-auto p-4">
        <Link href="/" className="mr-4">
          Home
        </Link>
      </nav>
    </Flex>
  );
}
