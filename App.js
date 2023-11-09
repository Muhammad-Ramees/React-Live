const heading = React.createElement(
  "h1",
  {
    key: 1,
  },
  "NAVBAR ========================="
);
const body = React.createElement(
  "p",
  {
    key: 2,
    style: { backgroundColor: "lightblue" },
  },
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum qui molestias dolor in fugit dolorem quisquam assumenda, suscipit, soluta officia odio, nulla saepe? Aut in doloremque nihil tempore labore?"
);
const footer = React.createElement(
  "h1",
  {
    key: 3,
  },
  "FOOTER ========================="
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, body, footer]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
