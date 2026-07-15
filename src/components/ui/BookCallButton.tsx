import type { MouseEvent, ReactNode } from "react";

interface BookCallButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  busy?: boolean;
  className?: string;
  large?: boolean;
}

export function BookCallButton({
  children = "Book a Call",
  onClick,
  href = "#contact",
  busy,
  className = "",
  large = false,
}: BookCallButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (busy) return;
    if (onClick) return onClick(event);
    window.dispatchEvent(new Event("predictbyte:book-call"));
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      data-cursor="button"
      aria-busy={busy}
      className={`book-call-btn ${large ? "book-call-btn--lg" : ""} ${className}`.trim()}
    >
      {children}
      <span className="book-call-btn__icon" aria-hidden="true">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          />
        </svg>
      </span>
    </a>
  );
}
