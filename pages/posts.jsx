import React from 'react'

export const getServerSideProps = async (ctx) => {

	// ctx is the context object which contains the request,
	// response and props passed to the page.

	// fetching data from jsonplaceholder.
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts');
	let allPosts = await res.json();

	// Sending fetched data to the page component via props.
	return {
		props: {
			allPosts: allPosts.map((post) => post.title)
		}
	}
}

const Posts = ({ allPosts }) => {
	return (
		<div>
			<h1>All Posts</h1>
			{allPosts.map((post, idx) => (
				<div key={idx}>{post}</div>))}
		</div>
	)
}

export default Posts
