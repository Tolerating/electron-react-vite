import { Link, Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <h1 className=" mb-4">游戏页面✈✈🌏✈</h1>
      <div className="flex justify-center gap-x-3 mb-3">
        <Link
          to="childrenA"
          className="p-2 bg-lime-400/40 rounded-lg hover:bg-lime-600"
        >
          子页面1
        </Link>
        <Link
          to="childrenB"
          className=" p-2 bg-lime-400/40 rounded-lg hover:bg-lime-600"
        >
          子页面2
        </Link>
      </div>
      <Outlet />
    </>
  );
}
export default Home;
