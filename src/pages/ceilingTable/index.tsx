import { useState, useEffect } from "react";
import "./index.css";
const ceilingTable = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="total-page">
      <header>标题1</header>
      <div className="content">内容1</div>
      <table className={isSticky ? "sticky" : ""}>
        <tbody>
          <tr>
            <td align="center">table1</td>
            <td align="center">table2</td>
            <td align="center">table3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ceilingTable;
