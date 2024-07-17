import { schema, dataSource } from "./config";
import "./index.css";

const configTable = () => {
  //时间戳转换
  const formattedDate = (timestamp: any) => {
    if (!timestamp) {
      return;
    }
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };

  //根据配置和数据获取表格
  const getTable = (data: any) => {
    //每一行的数据
    let temporaryArray: React.JSX.Element[] = [];
    // 获取每行数据
    schema.forEach((item) => {
      let defaultValue: string | undefined = "";
      const needData = data[item.dataIndex];
      if (item.enums) {
        //枚举时获取真正的值
        defaultValue =
          item.enums.find((enumItem) => {
            const { value }: { value?: string } = enumItem || {};
            return value === String(needData);
          })?.label || needData;
      } else if (item.type === "date") {
        // 是日期时转成日期形式
        defaultValue = formattedDate(needData);
      } else if (item.type === "dateRange") {
        //是日期范围时转成日期范围形式
        defaultValue = `${formattedDate(needData[0])}-${formattedDate(
          needData[1]
        )}`;
      } else {
        defaultValue = needData;
      }

      temporaryArray.push(<td align="center">{defaultValue}</td>);
    });
    return temporaryArray;
  };

  return (
    <div className="root">
      <table width={1000}>
        <thead>
          <tr>
            {schema.map((item) => {
              return <th>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item) => {
            return <tr>{getTable(item)}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default configTable;
