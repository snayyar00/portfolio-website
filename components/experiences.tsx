"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import Experience from "./experience";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>My Experiences</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
