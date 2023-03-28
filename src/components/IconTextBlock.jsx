export default function IconTextBlock({ Heading = "", ContentText = "" }) {
  return (
    <div className="flex flex-col items-center pb-10 mx-auto border-b border-gray-200 max-w-7xl sm:flex-row">
      <div className="flex-grow prose text-left prose-md">
        <h2>{Heading}</h2>
        <p>{ContentText}</p>
      </div>
    </div>
  );
}
