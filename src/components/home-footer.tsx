import { FaSquareGithub } from "react-icons/fa6";
import { SiGitee } from "react-icons/si";
import { GrBlog } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
export default function HomeFooterPage() {
  return (
    <>
      {/* Links */}
      <div className="flex justify-center mt-16 text-white">
        <a
          href="https://github.com/leslie1943"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="w-6 h-6 rounded bg-black mx-4"></FaSquareGithub>
        </a>

        <a
          href="https://gitee.com/leslie43/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGitee className="w-6 h-6 rounded bg-black mx-4"></SiGitee>
        </a>
        <a
          href="https://www.cnblogs.com/leslie1943"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrBlog className="w-6 h-6 rounded bg-black mx-4"></GrBlog>
        </a>
        <a
          href="https://www.linkedin.com/in/zhen-su-741600110/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 rounded bg-black mx-4"></FaLinkedin>
        </a>
      </div>
      <div className="flex justify-center mt-8 text-white text-xs">
        Build with Next.js & Tailwind CSS
      </div>
    </>
  );
}
