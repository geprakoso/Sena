"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/app/components/case-study/ProjectCard";
import { getPortfolioProjects } from "@/app/data/content";

export default function PortfolioFilter({ dict = {} }: { dict?: any }) {
  const [activeTag, setActiveTag] = useState("All");
  const portfolioProjects = useMemo(() => getPortfolioProjects(dict), [dict]);
  const ALL_TAGS = useMemo(() => ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.tag)))], [portfolioProjects]);

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.tag === activeTag),
    [activeTag]
  );

  return (
    <>
      {/* Filter pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.625rem",
          justifyContent: "center",
          marginBottom: "3.5rem",
        }}
      >
        {ALL_TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              style={{
                padding: "0.4375rem 1.125rem",
                borderRadius: "999px",
                border: isActive
                  ? "1px solid var(--color-accent)"
                  : "1px solid var(--color-border)",
                background: isActive
                  ? "rgba(255,107,74,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: isActive
                  ? "var(--color-accent-light)"
                  : "var(--color-text-secondary)",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              className="filter-pill"
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Single-column list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
        className="portfolio-list"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} dict={dict} />
        ))}
      </div>

      <style>{`
        .filter-pill:hover {
          border-color: rgba(255,107,74,0.5) !important;
          color: var(--color-text-primary) !important;
          background: rgba(255,107,74,0.08) !important;
        }
      `}</style>
    </>
  );
}
