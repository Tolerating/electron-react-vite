import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { AppDisPatch, RootState } from "./store";
import { increaseAge ,reduceAge,fetchUserAge} from "@/store/modules/user";
function App() {
  const { age } = useSelector((state: RootState) => state.user);
  const dispatch:AppDisPatch = useDispatch();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-5 p-3">
          <Link to="/">首页</Link>
          <Link to="home">游戏</Link>
          <Link to="news">新闻</Link>
        </div>
        <div>{age}</div>
        <div>
          <button onClick={() => dispatch(increaseAge(1))} style={{padding:10,border: "1px solid #fff",marginRight:10}}>+1</button>
          <button onClick={() => dispatch(reduceAge(1))} style={{padding:10,border: "1px solid #fff"}}>-1</button>
          <button onClick={() => dispatch(fetchUserAge())} style={{padding:10,border: "1px solid #fff"}}>异步数字加3</button>
        </div>
        <div className="border border-zinc-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
