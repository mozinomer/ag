export class courses_detail
{
    constructor(
      public name: string,
      public detail: string,
      public students_enrolled: number,
      public course_author: string,
      public  last_uodated_date:number,
      public languages_supported: string,
      public price: number,
      public what_u_learn:string,
      public requirement:string,
      public description:string,
      public review_man: string,
      public review_date:number,
      public review_content:string,
      public was_userful_review:boolean
    ) {}
}
