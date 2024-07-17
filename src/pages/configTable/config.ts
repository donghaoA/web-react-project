interface Ischema {
  dataIndex: string; // 字段key，对应数据源中的哪个数据
  label: string; // 列头显示文字
  type: Type | string; // 列展示类型，具体类型见下enum Type
  enums?: Array<object>; // 枚举类型专用，枚举类型label和value的映射关系
}

enum Type {
  enum, // 枚举型
  date, // 日期型，单位为毫秒
  dateRange, // 日期范围，单位为毫秒
  string, // 简单字符串
}

export const schema: Ischema[] = [
  {
    dataIndex: "field1",
    type: "enum",
    label: "枚举",
    enums: [
      {
        label: "值为-1",
        value: "-1",
      },
      {
        label: "值为0",
        value: "0",
      },
      {
        label: "值为1",
        value: "1",
      },
      {
        label: "值为2",
        value: "2",
      },
    ],
  },
  {
    dataIndex: "field2",
    type: "date",
    label: "日期",
  },
  {
    dataIndex: "field3",
    type: "dateRange",
    label: "日期范围",
  },
  {
    dataIndex: "field4",
    type: "string",
    label: "简单字符串",
  },
];

export const dataSource = [
  {
    field1: 1,
    field2: 1711027564449,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串",
  },
  {
    field1: -1,
    field2: 1711123199000,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串2",
  },
];
