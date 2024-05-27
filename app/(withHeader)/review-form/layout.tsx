import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  booksModal: React.ReactNode;
}

function ReviewFormLayout({ children, booksModal }: Props) {
  return (
    <>
      {children}
      {booksModal}
    </>
  );
}

export default ReviewFormLayout;
