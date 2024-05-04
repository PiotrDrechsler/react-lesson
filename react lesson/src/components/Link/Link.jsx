export function Link(props) {
  const adress = "https://zrozumiecreact.pl";
  return (
    <a href={adress} target="_blank" rel="noopener noreffer">
      {props.text}
    </a>
  );
}
