import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

// useCallback
// useCallback은 특정 함수를 메모이제이션하여,
// 디펜던시가 변경되지 않는 한 동일한 함수를 반환합니다.
// 이는 자식 컴포넌트에 함수를 props로 전달할 때 유용합니다.

// useMemo, useCallback 사용법
//1. 복잡한 계산을 수행하는 컴포넌트에서 useMemo를 사용하여 성능을 최적화합니다.
//2. 자식 컴포넌트에 함수를 props로 전달할 때 useCallback을 사용하여 불필요한 렌더링을 방지합니다.

// Context
// props는 부모에서 자식으로 데이터 이동이 가능하다..
// 하지만 많은 서비스가 있으면 그 과정이 복잡하다.
// 이 propsdrilling을 해결하는 방법이 context이다.

// 데이터 모델링
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
