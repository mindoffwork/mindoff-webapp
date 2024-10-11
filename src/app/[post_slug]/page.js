import react from "react";


export default function PostPage(post_slug) {

  return (
    <div>
      <h1>Post: {post_slug.params.post_slug }</h1>
      <p>This is the page for post {post_slug.params.post_slug }.</p>
    </div>
  );
}
