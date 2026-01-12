"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePaginationHook } from "../_hook/usePaginationHook";
import { cn } from "@/lib/utils";

export function DynamicPagination() {
  const {
    handlePrevious,
    handleNext,
    handlePageChange,
    getDisplayPages,
    totalPages,
    displayPages,
    maxButtons,
    currentPage,
  } = usePaginationHook();
  return (
    <Pagination className="w-full flex justify-end items-end">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} href="#" />
          </PaginationItem>
        )}
        {displayPages.map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              onClick={handlePageChange(pageNum)}
              className={cn(
                "cursor-pointer",
                pageNum === currentPage && "bg-gray-200"
              )}
              href="#"
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={handleNext} href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
