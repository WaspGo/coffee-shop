export function Button(props) {
  const { name, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[75px] py-[6px] px-2 rounded-[4px] shadow-[4px_4px_20px_0_rgba(0,0,0,0.25)]"
    >
      {name}{" "}
    </button>
  );
}
