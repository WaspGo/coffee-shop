import { LogoIcon } from "../assets/icons/LogoIcon";

export function BeansLogo(props) {
  const { color, marginTop } = props;
  return (
    <div
      style={{ marginTop: `${marginTop}px` }}
      className="flex gap-[27px] items-center justify-center"
    >
      <div
        className={`border border-${color} w-[60px] h-0 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]`}
      />
      <LogoIcon className={`h-[39px] w-[39px] translate-y-1 text-${color}`} />
      <div
        className={`border border-${color} w-[60px] h-0 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]`}
      />
    </div>
  );
}
