export interface Book{
  id: Number,
  volumeInfo:{
    title?:string,
    authors:string[],
    publishedDate:string,
    imageLinks: {
      thumbnail:string,
    }
    previewLink:string,
    description:string,
  }
}
