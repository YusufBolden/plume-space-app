import type { PostContentProps } from '../types';

export default function PostContent({ post }: PostContentProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <img src="/plume-space-app/favicon.png" alt="Logo" className="w-14 h-14" />
        <h1 className="text-4xl font-bold text-[#b45309] border-b-2 border-[#b45309] inline-block pb-2">
          {post.title}
        </h1>
      </div>
      <div className="text-[1.15rem] sm:text-[1.2rem] md:text-[1.25rem] space-y-6 text-justify">
  {post.content}
</div>
    </article>
  );
}
