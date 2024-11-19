import React, { useState } from "react";
import AppLayout from "components/Layout/AppLayout";
import BookSection from "components/Dashboard/BookSection";

const DashboardPage = () => {
  const [sections, setSections] = useState([]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addSection = (parentId) => {
    setSections((prevSections) => {
      const newSection = {
        id: generateId(),
        title: "",
        subsections: [],
        level: 0,
      };

      if (!parentId) {
        return [...prevSections, newSection];
      }

      const addSubsection = (sections) =>
        sections.map((section) => {
          if (section.id === parentId) {
            return {
              ...section,
              subsections: [
                ...section.subsections,
                { ...newSection, level: section.level + 1 },
              ],
            };
          }
          return {
            ...section,
            subsections: addSubsection(section.subsections),
          };
        });

      return addSubsection(prevSections);
    });
  };

  const deleteSection = (idToDelete) => {
    const deleteRecursive = (sections) =>
      sections
        .filter((section) => section.id !== idToDelete)
        .map((section) => ({
          ...section,
          subsections: deleteRecursive(section.subsections),
        }));

    setSections((prevSections) => deleteRecursive(prevSections));
  };

  return (
    <AppLayout>
      <div className="mx-auto min-w-[250px] px-2 py-3 rounded lg:max-w-[900px] overflow-x-auto bg-gray-50 border-none max-h-fit !w-fit !h-fit flex flex-col gap-4">
        <h1 className="text-center text-xl font-semibold">Nested Sections</h1>
        <button
          onClick={() => addSection()}
          className="border border-solid rounded-2xl p-2 w-full max-w-[250px] mx-auto bg-green-100"
        >
          Add Book
        </button>
        <div className="flex flex-col gap-10">
          {sections.map((section) => {
            return (
              <div className="flex flex-col gap-2" key={section.id}>
                <p className="text-lg font-medium">Book</p>
                <BookSection
                  key={section.id}
                  section={section}
                  onAddSubsection={addSection}
                  onDelete={deleteSection}
                />
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
