interface Props {
  params: { id: string };
}

function ReviewDetail({ params: { id } }: Props) {
  //TODO: id값으로 서평 상세 정보 요청

  return <div className="flex flex-col">{id}</div>;
}

export default ReviewDetail;
