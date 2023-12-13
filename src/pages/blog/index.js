import PostLayout from "../../app/components/PostLayout"
import Image from "next/image"

export default function BlogPost01() {
	const blogIndex = [
		{
			title:"Under The Hood #1: How to Spot a Lemon Online",
			slug:"under-the-hood-1",
			imgUrl:"/images/blogs/lemon.jpg"
		}
	]
	return (
		<main>
			{blogIndex.map( post => {
				<article className="w-4/5" key={post.slug}>
					<a href={`https://ordinaryagency.com.au/blog/${slug}`}>
					<figure>
						<Image 
							src={post.imgUrl}
							alt={post.title}
							width={300}
							height={225}
						/>
					</figure>
					<h3>{post.title}</h3>
					</a>
				</article>
			})}
		</main>
	)
};