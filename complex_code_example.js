/**
 * Filename: complex_code_example.js
 *
 * This code demonstrates a complex implementation of a social media platform
 * where users can create posts, follow other users, like and comment on posts,
 * and view their own and others' news feeds.
 *
 * It includes advanced concepts such as object-oriented programming, use of
 * arrays and objects, asynchronous operations, error handling, and more.
 */

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.posts = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  follow(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }

  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index !== -1) {
      this.following.splice(index, 1);
    }
  }

  getNewsFeed() {
    let feed = [];
    const allPosts = this.posts.concat(...this.following.map(user => user.posts));
    feed = allPosts.sort((a, b) => b.timestamp - a.timestamp);
    return feed;
  }
}

class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.timestamp = new Date();
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  unlike() {
    if (this.likes > 0) {
      this.likes--;
    }
  }

  addComment(text) {
    const comment = new Comment(text);
    this.comments.push(comment);
    return comment;
  }
}

class Comment {
  constructor(text) {
    this.text = text;
    this.timestamp = new Date();
  }
}

// Usage example:
const user1 = new User(1, "John");
const user2 = new User(2, "Mary");
const user3 = new User(3, "Emily");

user1.createPost("Hello, world!");
user1.createPost("This is a complex code example.");
user1.createPost("Feel free to follow me!");

user2.createPost("I'm new here. Nice to meet you all!");
user2.createPost("Looking for cool people to follow!");

user2.follow(user1);
user3.follow(user1);
user3.follow(user2);

user1.createPost("Welcome to my profile!");

const newsFeed = user3.getNewsFeed();
console.log("News Feed:", newsFeed);
