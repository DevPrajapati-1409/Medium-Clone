export interface Props {
  posts: [Post]
}

export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  comments: Comment[]
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

export interface Props {
  post: Post
}

export interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

export interface Comment {
  _id: string
  name: string
  email: string
  comment: string
  approved: boolean
  post: {
    _ref: string
    _type: string
  }
  _createdAt: string
  _rev: string
  _type: string
  _updatedAt: string
}
