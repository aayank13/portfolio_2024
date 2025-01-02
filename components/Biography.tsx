"use client";

import Avatar from "./Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "./Heading";
import { StaticImageData } from "next/image";
import { useState } from 'react';
import ResumePopup from './ResumePopup';

type BiographyProps = {
  heading: string;
  body: string;
  buttonLink: string;
  buttonText: string;
  avatar: StaticImageData | string;
};

const Biography = ({
  heading,
  body,
  buttonText,
  avatar,
}: BiographyProps): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
          linkField="#"
          label={buttonText}
          onClick={(e) => {
            e.preventDefault();
            setIsPopupOpen(true);
          }}
        />

        <ResumePopup
          isOpen={isPopupOpen}
          setIsOpen={setIsPopupOpen}
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
