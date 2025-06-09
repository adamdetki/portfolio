import { Flex } from "@components/shared";

export default function Header() {
  return (
    <Flex className="flex-row sticky top-0 z-50 bg-white shadow-sm">
      <nav className="ml-auto p-4">
        <a href="/" className="mr-4">
          Home
        </a>
      </nav>
    </Flex>
  );
}
