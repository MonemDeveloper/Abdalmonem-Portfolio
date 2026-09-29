/** Renders text, applying the accent gradient to any *starred* phrase. */
export default function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="text-gradient">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
