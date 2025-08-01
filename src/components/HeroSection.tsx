import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              Callum
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bain
            </span>
          </h1>
          <h1 className="text-primary text-2xl opacity-50">
            (WORK IN PROGRESS)
          </h1>
          <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            This is the bio about myself. I'm going to fill out this page so
            that someone will give me a job.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about">
          <ArrowDown className="h-7 w-7 text-primary" />
        </a>
      </div>
    </section>
  );
};
