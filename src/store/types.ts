/*
 * @Author: zhangjie
 * @Date: 2021-12-29 19:51:26
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-29 20:52:37
 * @FilePath: \vue3-demo\src\store\types.ts
 */
export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface TemplateProps {
  id: number;
  title: string;
}

export interface GlobalDataProps {
  user: UserProps;
  tempaltes: TemplateProps[];
  storeCount:number
}
