"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
 

  return (
    <div className="p-2 flex justify-between">
      <button
        
      >
        Previous
      </button>
      <button
      
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
