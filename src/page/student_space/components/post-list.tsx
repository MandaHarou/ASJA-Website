import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { Avatar } from '@/components/ui/avatar';

import logo from '@/assets/Logo/asja-logo.png';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MdVisibility } from 'react-icons/md';

export const PostList = () => {
  const { post } = useStudentPortalContext();
  return (
    <Card className="p-4 transition-all duration-500">
      <ScrollArea className="h-full">
        {post.map((item) => (
          <section className="flex flex-col p-4 gap-3">
            <section className=" flex items-center gap-3">
              <Avatar className=" size-11 ">
                <img src={logo} />
              </Avatar>
              <p className="font-semibold text-xl text-black dark:text-white">
                {item.title}
              </p>
            </section>
            <p className=" text-black dark:text-white">{item.description}</p>
            {item.imageUrl && (
              <img src={item.imageUrl} className="rounded-2xl size-200" />
            )}
            <section className="flex justify-between w-full py-5">
              <p className="flex justify-center items-center gap-1 text-gray-500">
                {' '}
                <MdVisibility /> Vue 150
              </p>
              <p className="flex justify-end text-gray-500">
                Publie le , {item.date}
              </p>
            </section>

            <Separator className="data-[orientation=vertical]:h-10" />
          </section>
        ))}
      </ScrollArea>
    </Card>
  );
};
