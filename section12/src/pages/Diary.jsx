import { useParams } from "react-router-dom";

// 동적 경로
// URL Parameter : /뒤에 아이템의 id를 명시 (ex:변경되지 않는 값)
// Query String : ? 뒤에 변수명과 값 명시 (ex:검색어)

// useParams : url에 명시된 파라미터값을 가져옴
const Diary = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
