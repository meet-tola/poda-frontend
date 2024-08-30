"use client";

import React, { useState } from "react";
import { faqdata } from "@/utils/faqdata";
import { Plus, SquareMinus } from "lucide-react";

const Faqs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const onToggleData = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {faqdata.map((el) => {
        return (
          <div key={el.id}>
            <div className="flex flex-col items-center text-[14px] rounded-md shadow-sm border p-3 bg-white">
              <div className="w-full my-4 flex justify-between px-3">
                <div className="font-bold text-[16px]">{el.text}</div>
                <div onClick={() => onToggleData(el.id)}>
                  {expandedId === el.id ? (
                    <SquareMinus
                      size={20}
                      className="text-[red] hover:cursor-pointer"
                    />
                  ) : (
                    <Plus size={20} className="hover:cursor-pointer" />
                  )}
                </div>
              </div>
              {expandedId === el.id && (
                <p className="w-full px-3 text-[13px] pb-5">{el.element}</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Faqs;
