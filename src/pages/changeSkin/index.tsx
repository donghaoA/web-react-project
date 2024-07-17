import { useEffect, useState } from "react";
import "./index.css";
const changeSkin = () => {
  const [changeColor, setChangeColor] = useState("light");
  //页面刷新
  useEffect(() => {
    console.log(111);
  }, [changeColor]);

  //按钮切换主题
  const getBtn = () => {
    const elementDiv = document.querySelector(".root");
    let currentTheme = elementDiv?.getAttribute("data-theme");
    // 切换主题
    setChangeColor(currentTheme === "dark" ? "light" : "dark");
  };
  return (
    <div className="root" data-theme={changeColor}>
      <div className="header">header</div>
      <div className="content">
        <div className="content-text">
          <button onClick={() => getBtn()}>一键换肤</button>
        </div>
        <div className="content-silder">silder</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};
export default changeSkin;
