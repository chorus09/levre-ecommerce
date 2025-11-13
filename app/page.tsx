import { PlaceholderRed } from "@/components/PlaceholderRed";

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 space-y-6">
      <h1 className="text-3xl font-medium">Placeholder Test</h1>

      <PlaceholderRed className="w-40 h-40" />

      <PlaceholderRed className="w-full h-16" />
    </main>
  );
}
