import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-5 p-3">
          <Link to="/">首页</Link>
          <Link to="home">游戏</Link>
          <Link to="news">新闻</Link>
        </div>
        <div className=" border border-zinc-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
