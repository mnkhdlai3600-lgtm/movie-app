import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const usePaginationHook = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const totalPages = 10;
  const maxButtons = 3;

  const currentPage = Math.min(
    Number(searchParams.get("page") ?? 1),
    totalPages
  );

  const handlePageChange = (pageNumber: number) => () => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)();
    }
  };

  const getDisplayPages = () => {
    let start = Math.max(currentPage - Math.floor(maxButtons / 2), 1);

    let end = start + maxButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return {
    currentPage,
    totalPages,
    maxButtons,
    displayPages: getDisplayPages(),
    handlePrevious,
    handleNext,
    handlePageChange,
  };
};
