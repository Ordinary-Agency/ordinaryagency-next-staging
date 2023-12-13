// import fs from 'fs';
// import path from 'path';
// import parse from "html-react-parser"

// export default function Post({ post }) {
//     return (
//       <article className='bg-white'>
//         <h1>{post.title}</h1>
//         <div >{parse(post.content)} </div>
//       </article>
//     );
// }
  
// export async function getStaticProps({ params }) {
//     const filePath = path.join(process.cwd(), 'src', 'data', 'blog', 'posts2023.json');
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     const posts = JSON.parse(jsonData).posts;
//     const post = posts.find(post => post.slug === params.slug);
  
//     return { props: { post } };
//   }
  
// export async function getStaticPaths() {
//     const filePath = path.join(process.cwd(),'src', 'data', 'blog', 'posts2023.json');
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     const posts = JSON.parse(jsonData).posts;
//     const paths = posts.map(post => ({
//       params: { slug: post.slug },
//     }));
  
//     return { paths, fallback: false };
// }