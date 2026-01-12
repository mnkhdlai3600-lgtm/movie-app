import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PaginationProps = {
  totalPage: number;
};

export const usePaginationHook = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const totalPages = 10;
  const maxButtons = 3;
  const currentPage = Number(searchParams.get("page") ?? 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)();
    }
  };
  const handleNext = () => {
    if (currentPage > totalPages) {
      handlePageChange(currentPage + 1)();
    }
  };
  const handlePageChange = (pageNumber: number) => () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  const getDisplayPages = () => {
    let start = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let end = start + maxButtons - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, currentPage - maxButtons + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const displayPages = getDisplayPages();

  return {
    maxButtons,
    currentPage,
    totalPages,
    displayPages,
    handlePrevious,
    handleNext,
    handlePageChange,
    getDisplayPages,
  };
};
