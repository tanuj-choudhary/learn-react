const container = document.getElementById("like_button_container");
const root = ReactDOM.createRoot(container);

root.render(
  React.createElement(
    "h1",
    { className: "greeting" },
    "Hello ",
    React.createElement("i", null, "Shivam"),
    ". Welcome!"
  )
);
