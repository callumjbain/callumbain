import { Linkedin, MailIcon, MapPin, PhoneCall } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-10 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact <span className="text-primary">Information</span>
        </h2>
        <div className="space-y-6 justify-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:justify-items-start">
            {/*  */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MailIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@gmail.com
                </a>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+447777777777"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 7777777777
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  London, UK
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="www.mylinkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  www.mylinkedin.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
