import { useState } from "react";

export default function AccordionItem({ region }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        className="w-full text-left p-4 bg-blue-100 hover:bg-blue-200 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {region.title}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="mb-2">{region.content}</p>
          <ul className="list-disc pl-5 text-blue-700">
            {region.dances.map((dance, i) => (
              <li key={i}>{dance}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}