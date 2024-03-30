import Hero from "@/components/generic/Hero";
import { ImageName } from "@/lib/image";

interface LandingPageTextContentProps {
  children: React.ReactNode;
}

const LandingPageTextContent: React.FC<LandingPageTextContentProps> = (
  props
) => {
  return (
    <div className="rounded-lg bg-white p-4">
      <h2 className="font-bold text-1xl mb-2 text-red-950">
        {props.children}
      </h2>
    </div>
  );
};

export default function Home() {
  return (
    <div className="p-4 overflow-y-scroll space-y-4">
      <Hero
        imageName={ImageName.Cat}
        title="jose vega"
        subtitle="software engineer, etc."
      />
      <LandingPageTextContent>
        Based in Berlin, with over 5 years of professional experience working
        with web technologies and specialized in front-end development.
      </LandingPageTextContent>
      <LandingPageTextContent>
        I also am interest in design and art and the intersection of both. This
        website holds some of my personal projects.
        <br />
        Technical and not.
      </LandingPageTextContent>
      <LandingPageTextContent>
        {
          "I've been working at Amazon Web Services as a Front-End Engineer II since 2022."
        }
        <br />
        {
          "There, I've been working on the AWS Console, specifically on Systems Manager services like Application Manager, Distributor and Quick Setup."
        }
      </LandingPageTextContent>
      <LandingPageTextContent>
        {
          "Before that, I worked at HERE Technologies from 2018 to 2022. I started as an Intern Software Engineer and then transitioned to the role of Software Engineer II in May 2019."
        }
        <br />
        {
          "There, I mainly worked on the Style Editor application."
        }
        </LandingPageTextContent>
    </div>
  );
}
