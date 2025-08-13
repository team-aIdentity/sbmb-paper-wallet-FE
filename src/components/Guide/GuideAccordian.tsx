import React, { useState } from "react";
import GuideNav from "./GuideNav";

import { guideData, defaultSection, type GuideSection } from "@/data/guideData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GuideAccordian = () => {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);
  const currentSection: GuideSection =
    guideData[activeSection] || guideData[defaultSection];

  return (
    <div className="flex flex-col gap-8 px-10 py-20 md:px-20 xl:gap-16 xl:px-25 2xl:flex-row 2xl:gap-30 2xl:px-30">
      <GuideNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <Accordion type="single" collapsible className="w-full">
        {currentSection.items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="xl:text-4xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line xl:text-2xl">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default GuideAccordian;
