import type { SVGProps } from "react";

const paths = {
  arrow: "M5 12h14m-5-5 5 5-5 5",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  menu: "M4 7h16M4 12h16M4 17h10",
  close: "M6 6l12 12M18 6 6 18",
  check: "m5 12 5 5L20 7",
  play: "M8 5.5v13l11-6.5-11-6.5Z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9c1.5-4 4.5-6 8-6s6.5 2 8 6",
  cap: "M2 9l10-5 10 5-10 5L2 9Zm4 2.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9v6",
  hands: "M12 3v4M5.6 5.6l2.8 2.8M18.4 5.6l-2.8 2.8M3 21v-5l3-3a2.5 2.5 0 0 1 3.5 0L11 15v6M21 21v-5l-3-3a2.5 2.5 0 0 0-3.5 0L13 15v6",
  book: "M12 6c-2.5-1.8-6-2.2-9-1.2v14c3-1 6.5-.6 9 1.2m0-14c2.5-1.8 6-2.2 9-1.2v14c-3-1-6.5-.6-9 1.2m0-14v14",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
  gift: "M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7S10.5 3 8 4s.5 3 4 3Zm0 0s1.5-4 4-3-.5 3-4 3Z",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10c1-3.5 3.8-5.5 7-5.5s6 2 7 5.5M16 3.5a4 4 0 0 1 0 7.5M18 15c2 .7 3.4 2.6 4 6",
  briefcase: "M3 8h18v12H3zM8 8V5h8v3M3 13h18",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  pin: "M12 21s7-6 7-11.5a7 7 0 0 0-14 0C5 15 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  shield: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4",
  calendar: "M4 5h16v15H4zM4 10h16M8 3v4M16 3v4",
  sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z",
  download: "M12 4v11m-5-5 5 5 5-5M5 20h14",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h4",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  coins: "M9 11c3.9 0 7-1.3 7-3s-3.1-3-7-3-7 1.3-7 3 3.1 3 7 3Zm-7-3v4c0 1.7 3.1 3 7 3s7-1.3 7-3V8m-14 4v4c0 1.7 3.1 3 7 3 1.2 0 2.3-.1 3.3-.4M22 12c0 1.7-2.7 3-6 3",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35",
  link: "M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1m2 5a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2",
} as const;

const filled = {
  chat: "M12 3C6.5 3 2 6.8 2 11.5c0 2.5 1.3 4.8 3.4 6.3L4.5 21l4-2c1.1.3 2.3.5 3.5.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3Z",
  facebook: "M14 8V6c0-.8.2-1 1-1h2V2h-3c-3 0-4 1.5-4 4v2H8v3h2v11h4V11h3l.5-3H14Z",
  youtube:
    "M22 8.2a3 3 0 0 0-2-2.1C18.2 5.6 12 5.6 12 5.6s-6.2 0-8 .5a3 3 0 0 0-2 2.1A31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2 2.1c1.8.5 8 .5 8 .5s6.2 0 8-.5a3 3 0 0 0 2-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z",
  linkedin:
    "M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h3v12H3V9Zm6 0h3v1.7c.5-1 1.8-2 3.6-2 3.4 0 4.4 2 4.4 5.4V21h-3v-6c0-1.6-.3-3-2-3s-2.6 1.2-2.6 3v6H9V9Z",
  quote: "M4 18v-5c0-4 2-7 6-8l1 2c-2 .8-3 2.3-3 4h3v7H4Zm9 0v-5c0-4 2-7 6-8l1 2c-2 .8-3 2.3-3 4h3v7h-7Z",
} as const;

export type IconName = keyof typeof paths | keyof typeof filled;

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export default function Icon({ name, className = "size-5", ...rest }: Props) {
  const isFilled = name in filled;
  const d = isFilled ? filled[name as keyof typeof filled] : paths[name as keyof typeof paths];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
