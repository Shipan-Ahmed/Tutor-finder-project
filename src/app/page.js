import AvailableTutors from "@/Component/AvailableTutors";
import Banner from "@/Component/Banner";
import HowItWorks from "@/Component/HowItWorks";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner/>
      <AvailableTutors />
      <HowItWorks />
    </div>
  );
}
