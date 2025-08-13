import React from "react";
import { guideData } from "@/data/guideData";
import { Button } from "../ui/button";

interface GuideNavProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const GuideNav = ({ activeSection, onSectionChange }: GuideNavProps) => {
  return (
    <nav
      className="scrollbar-hide flex gap-4 overflow-x-auto 2xl:w-100 2xl:flex-col"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {Object.values(guideData).map((section) => (
        <Button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          size="xl"
          className={`text-xl xl:text-2xl 2xl:justify-between ${
            activeSection === section.id
              ? "bg-[#8FD8C7]/40 text-[#225D54] hover:bg-[#8FD8C7]/50"
              : "bg-[#2F3E46]/10 text-[#2F3E46]/60 hover:bg-[#2F3E46]/20"
          }`}
        >
          {section.title} <span>{activeSection === section.id && "→"}</span>
        </Button>
      ))}
    </nav>
  );
};

export default GuideNav;
