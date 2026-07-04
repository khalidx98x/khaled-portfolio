import { Awards } from "@/components/Awards";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header name={portfolio.person.name} nav={portfolio.nav} />
      <main id="top">
        <Hero
          headlineLines={portfolio.hero.headlineLines}
          subtitle={portfolio.hero.subtitle}
          typewriterWords={portfolio.hero.typewriterWords}
        />

        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Clients logoSets={portfolio.logoSets} />
        </div>

        <Work projects={portfolio.projects} />

        <Awards award={portfolio.awards} />
        <Stack categories={portfolio.stackCategories} />
      </main>
      <Contact
        capabilities={portfolio.footer.capabilities}
        email={portfolio.footer.email}
        intro={portfolio.footer.intro}
        introTitle={portfolio.footer.introTitle}
        location={portfolio.footer.location}
        portraitPath={portfolio.footer.portraitPath}
      />
    </>
  );
}
