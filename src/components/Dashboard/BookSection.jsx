import React, { useState } from "react";

const BookSection = ({ section, onAddSubsection, onDelete }) => {
  const [title, setTitle] = useState(section.title || "");

  return (
    <div
      style={{ marginLeft: section.level * 20 }}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-row items-center gap-3">
        <input
          type="text"
          value={title}
          placeholder={
            section.level === 0 ? "Enter Book Title" : "Enter section title"
          }
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => (section.title = title)}
          className="bg-gray-100 p-2 rounded"
        />
        <button
          onClick={() => onAddSubsection(section.id)}
          className="text-green-500 text-2xl"
          title="Add Subsection"
        >
          +
        </button>
        <button
          onClick={() => onDelete(section.id)}
          className="text-red-500 text-2xl"
          title="Delete"
        >
          -
        </button>
      </div>
      <div>
        {section.subsections.map((subsection) => (
          <BookSection
            key={subsection.id}
            section={subsection}
            onAddSubsection={onAddSubsection}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSection;
