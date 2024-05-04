const adress = "https://zrozumiecreact.pl";

export function Link({ text = adress, shouldOpenNewTab }) {
  const target = shouldOpenNewTab ? "_blank" : "";
  const rel = shouldOpenNewTab ? "noopener noreffer" : "";
  return (
    <a href={adress} target={target} rel={rel}>
      {text}
    </a>
  );
}
