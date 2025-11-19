import { cn } from "cn-func";
import { Outlet } from "react-router-dom";

const MobileLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center overflow-hidden">
      <div
        className={cn(
          "relative overflow-y-scroll",
          "w-full h-[100dvh] sm:w-[430px] sm:max-w-full bg-white",
          "outline outline-offset-1 outline-gray-200"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MobileLayout;
