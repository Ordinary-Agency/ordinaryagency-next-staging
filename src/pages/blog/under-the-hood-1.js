import PostLayout from "../../app/components/PostLayout"
import Image from "next/image"

export default function BlogPost01() {
	const meta = {
		title:"Under the Hood #1: How to Spot a Lemon Online",
		slug: "under-the-hood-1",
		excerpt:"",
		author:"Joshua Hill",
		isoDate:"2023-12-13",
		niceDate:"December 13, 2023",
		imgPath: "/blogs/lemon.jpg",  
	}
	return (
		<PostLayout {...meta}>
			<article className='bg-white p-16 max-w-[850px] mx-auto'>
				<figure>
					<Image 
						src={`/images${meta.imgPath}`} 
						alt="Lemon Websites"
						width={800} 
						height={600}
					/>
				</figure>
				<h1 className="text-2xl md:text-3xl my-4">{meta.title}</h1>
				<time dateTime={meta.isoDate}>{meta.niceDate}</time>
				<address>
					Written by {meta.author}
				</address>
				<h2 className="text-xl md:text-2xl my-3">What's it matter?</h2>
				<p className="text-lg max-w-[75ch]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus tristique velit vel porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer sed nibh ut erat dictum pulvinar. Vivamus tristique purus vitae sem rhoncus suscipit. Maecenas placerat venenatis ligula ut gravida.
					Proin molestie dui vel arcu pharetra tempor. Aenean congue dapibus ornare. Pellentesque pellentesque volutpat turpis, quis pellentesque massa viverra vitae.
					Aenean id est eu risus pharetra sodales in nec mi. Sed vulputate facilisis turpis, sed mattis augue. Phasellus at fringilla purus.
					Etiam tempus metus lacinia, bibendum quam in, convallis turpis.
				</p>
				<h2 className="text-xl md:text-2xl my-1">How Can I tell?</h2>
				<p className="text-lg max-w-[75ch]">
					Phasellus nisl odio, dignissim mattis tellus vel, ultricies aliquet dolor. Donec tincidunt rhoncus tincidunt. Nullam ultricies feugiat est ac eleifend. Proin accumsan nunc sapien, ac cursus tellus porta a. Sed tincidunt libero felis. Etiam quis leo ultrices, tincidunt mauris ornare, bibendum erat. Quisque elementum, lacus ut sagittis finibus, nisi augue iaculis orci, ut volutpat enim mi at purus.
					Curabitur vehicula, velit vitae tincidunt ultrices, leo orci venenatis purus, vel vestibulum lorem mi nec lorem. Curabitur in ligula ultrices, rutrum odio in, semper tellus.
				</p>
			</article>
		</PostLayout>
	)
};