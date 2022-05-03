import { sampleData } from "./sampleData";

const TIME_OUT = 500;

function requestTodos(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(sampleData.TodoList), TIME_OUT);
  });
}

function requestMembers(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(sampleData.MemberList), TIME_OUT);
  });
}

export const api = { requestTodos, requestMembers };
