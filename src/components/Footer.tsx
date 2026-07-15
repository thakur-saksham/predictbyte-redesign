const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: ["AI Development", "Cloud Engineering", "Web Platforms"],
  },
  {
    title: "Projects",
    links: ["Case Studies", "Industries"],
  },
  {
    title: "Socials",
    links: ["LinkedIn", "X", "GitHub"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-16">
      <div className="mx-auto grid max-w-nav grid-cols-2 gap-10 sm:grid-cols-4">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-cursor="link"
                    className="text-sm text-secondary transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-nav flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-secondary sm:flex-row">
        <span className="font-serif text-base text-white">PredictByte®</span>
        <span>© {new Date().getFullYear()} PredictByte. All rights reserved.</span>
      </div>
    </footer>
  );
}
