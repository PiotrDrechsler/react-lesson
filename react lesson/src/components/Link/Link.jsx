export function Link(props) {
  const adress = "https://zrozumiecreact.pl";
  const target = props.shouldOpenNewTab ? "_blank" : "";
  const rel = props.shouldOpenNewTab ? "noopener noreffer" : "";
  return (
    <a href={adress} target={target} rel={rel}>
      {props.text}
    </a>
  );
}
