import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  page: {
    backgroundColor: "blue",
    height: 300,
    width: 300,
  },
  text: {
    color: "rebeccapurple",
    fontSize: 32,
  },
});

export default function Page() {
  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.text)}>Hello</div>
    </div>
  );
}
