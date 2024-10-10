import Safari from "../ui/safari";


type DemoSafariProps = {
img:string,
url:string
}
 
export function SafariDemo({img, url}:DemoSafariProps) {
  return (
    <div className="relative">
      <Safari
        url={url}
        className="size-full"
        src={img}
      />
    </div>
  );
}