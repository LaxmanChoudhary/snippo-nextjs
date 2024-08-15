import React, { useState } from "react";
import { XIcon } from "lucide-react";

const TagsContainer = () => {
  const [selectedTags, setSelectedTags] = useState([
    "api-request",
    "fetch",
    "async-await",
    "something",
    "tags-that-are-good",
    "sorry-somthing-long",
  ]);

  return (
    <div className="flex lg:block lg:space-y-2">
      <div className="flex text-sm rounded items-center border px-3 h-10">
        <input placeholder="eg. api-request" className="outline-none pr-2" />
      </div>
      <ul className="flex flex-wrap items-center lg:h-7 whitespace-nowrap gap-2 ml-3 lg:ml-0">
        {selectedTags.map((tag, id) => (
          <li
            className="flex gap-1 px-2 py-1 bg-slate-200 text-sm hover:bg-slate-100"
            key={id}
          >
            {tag}
            <button className="bg-white">
              <XIcon size={12} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsContainer;
