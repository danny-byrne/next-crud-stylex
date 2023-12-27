import Link from "next/link";

import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  page: {
    backgroundColor: "blue",
    height: "100vh",
    width: "100vw",
  },
  text: {
    color: "rebeccapurple",
  },
});

export default function Page() {
  return (
    <div {...stylex.props(styles.page)}>
      <div>Hello</div>
    </div>
  );
  // return <Link href="/dashboard">Dashboard</Link>;
}
