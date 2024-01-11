"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import Blog from "./blog";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blogs", 0.5);

  return (
    <section ref={ref} id="blogs" className="scroll-mt-28 mb-28">
      <SectionHeading>Blogs</SectionHeading>
      <div>
        {blogsData.map((blogs, index) => (
          <React.Fragment key={index}>
            <Blog {...blogs} title={blogs.title} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
