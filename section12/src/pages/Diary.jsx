import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

// 동적 경로
// URL Parameter : /뒤에 아이템의 id를 명시 (ex:변경되지 않는 값)
// Query String : ? 뒤에 변수명과 값 명시 (ex:검색어)

// useParams : url에 명시된 파라미터값을 가져옴
const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중..!</div>;
  }
  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />

      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
