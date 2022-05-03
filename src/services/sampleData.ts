import { Member, TodoItem } from "types";

export const MemberList: Array<Member> = [
  { id: "1", name: "Bryan Gonzalez", img: "members/bryan-avatar.jfif" },
  { id: "2", name: "Micheal Smith", img: "members/micheal-avatar.jfif" },
  { id: "3", name: "Jake Windham", img: "members/jake-avatar.jfif" },
  { id: "4", name: "William Wilson", img: "members/william-avatar.jfif" },
  { id: "5", name: "Audrey Maxwell", img: "members/audrey-avatar.jfif" },
];

export const TodoList: Array<TodoItem> = [
  {
    assignedMemberId: "1",
    id: "1",
    title: "delectus aut autem",
    isCompleted: false,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "1",
    id: "2",
    title: "quis ut nam facilis et officia qui",
    isCompleted: false,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "2",
    id: "25",
    title: "voluptas quo tenetur perspiciatis explicabo natus",
    isCompleted: true,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "2",
    id: "26",
    title: "aliquam aut quasi",
    isCompleted: true,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "3",
    id: "50",
    title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
    isCompleted: true,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "4",
    id: "63",
    title: "doloremque aut dolores quidem fuga qui nulla",
    isCompleted: true,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
  {
    assignedMemberId: "5",
    id: "81",
    title: "suscipit qui totam",
    isCompleted: true,
    date: new Date("Tue May 03 2022 21:48:35"),
    isOutOfDate: false,
  },
];

export const sampleData = { TodoList, MemberList };
