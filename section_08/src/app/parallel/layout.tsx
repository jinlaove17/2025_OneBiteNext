import Link from "next/link";
import { ReactNode } from "react";

const ParallelLayout = ({
  children,
  feed,
  sidebar,
}: {
  children: ReactNode;
  feed: ReactNode;
  sidebar: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href="/parallel">parallel</Link>
        &nbsp;
        <Link href="/parallel/setting">parallel/setting</Link>
      </div>
      <br />
      {sidebar}
      {feed}
      {children}
    </div>
  );
};

export default ParallelLayout;
