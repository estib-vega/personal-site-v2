import Hero from "@/components/generic/Hero";
import { ImageName } from "@/lib/image";

export default function Home() {
  return (
    <div className="p-4">
      <Hero
        imageName={ImageName.Cat}
        title="jose vega"
        subtitle="software engineer"
      />
    </div>
  );
}
