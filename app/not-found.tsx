import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center min-h-screen items-center text-center">
      The page you are looking for does not exist. Go back to home page&nbsp;
      <Link
        href="/"
        className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
      >
        here
      </Link>
      .
    </div>
  );
}
