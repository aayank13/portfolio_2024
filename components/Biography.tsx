import Avatar from "./Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "./Heading";
import { StaticImageData } from "next/image";

type BiographyProps = {
  heading: string;
  body: string; // Assuming this is HTML or plain text
  buttonLink: string;
  buttonText: string;
  avatar: StaticImageData | string; // Adjust based on your image handling
};

const Biography = ({
  heading,
  body,
  buttonLink,
  buttonText,
  avatar,
}: BiographyProps): JSX.Element => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {heading}
        </Heading>

        <div
          className="prose prose-xl prose-slate prose-invert col-start-1"
          dangerouslySetInnerHTML={{ __html: body }} // Render body as HTML
        />

        <Button
          linkField={buttonLink} // Standard link prop
          label={buttonText}
        />

        <Avatar
          image={avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
