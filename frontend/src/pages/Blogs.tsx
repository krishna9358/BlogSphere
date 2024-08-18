import { BlogCard } from "../components/BlogCard"
import {Appbar} from "../components/AppBar"
import {useBlogs} from "../hooks"
export const  Blogs = () => {
    const {loading ,blogs } = useBlogs();

    if (loading){
        return <div>
            Loading...
        </div>
    }
    return <div>
        <Appbar  />
         <div className="flex justify-center">
    <div className=" max-w-xl">
        {blogs.map(blog => <BlogCard id={blog.id} publishedDate={blog.publishedDate} authorName={blog.author.name || "anonymous"} title={blog.title} content={blog.content} />)}
        <BlogCard id={1} publishedDate={"10/10/2003"} authorName={"krishna"} title={"aslkfjasklfjliasl"} content={"jfajflsalkfasdfkjasdasdflasflkasfkljsadkjlfalskflkasjdflakjsfdnjasdlkflkc akshv glshklvhcs akfvh klahkfjas"} />
        
    </div>
    </div>
    </div>
}