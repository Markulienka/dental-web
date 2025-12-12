import { Card } from "@/components/ui/card";
import { Media as MediaType } from "@/payload-types";
import { Media } from "@/components/Media";
import { CMSLink } from "@/components/Link";
import { MapPin } from "lucide-react";

type ClinicPreviewLink = {
  type?: "reference" | "custom" | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: "pages";
    value: string | number;
  } | null;
  url?: string | null;
  label: string;
  appearance?: "default" | "outline" | null;
  id?: string | null;
};

export type ClinicItem = {
  image: MediaType | string;
  clinicName: string;
  location: string;
  tags: Array<{ tag: string }>;
  link: ClinicPreviewLink;
};

export type Feature20Props = {
  clinics: ClinicItem[];
};

const ClinicCard: React.FC<ClinicItem> = ({ image, clinicName, location, tags, link }) => (
  <Card className="overflow-hidden bg-white shadow-sm max-w-md mx-auto">
    {/* Full-width image at the top */}
    <div className="h-48 w-full overflow-hidden">
      <Media
        resource={image}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Content section below */}
    <div className="bg-white p-6">
      <p className="mb-2 text-xl text-foreground/100">{clinicName}</p>

      <div className="mb-4 flex items-center gap-2 text-foreground">
        <MapPin className="h-4 w-4 flex-shrink-0 text-foreground" />
        <span>{location}</span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tags?.map((t, i) => (
          <span
            key={i}
            className="rounded-full bg-foreground/10 px-3 py-1 text-xs text-foreground/100"
          >
            {t.tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <CMSLink
          {...link}
          appearance={link.appearance}
          className="w-full justify-center"
          label={link.label}
        />
      </div>
    </div>
  </Card>
);

const Feature20: React.FC<Feature20Props> = ({ clinics }) => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinics.map((clinic, index) => (
            <ClinicCard key={index} {...clinic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature20 };