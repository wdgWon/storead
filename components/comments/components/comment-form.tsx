"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addCommentMutationOption } from "@/hooks/mutationOptions/addCommentMutationOption";
import { commentListQueryOption } from "@/hooks/queryOptions/commentListQueryOption";

interface Props {
  articleId: string;
}

const formSchema = z.object({
  content: z.string().min(2, {
    message: "2글자 이상 입력해주세요.",
  }),
});

function CommentForm({ articleId }: Props) {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const { mutate } = useMutation({
    ...addCommentMutationOption(articleId),
    // onMutate: async (comment: CommentPayload) => {
    //   await queryClient.cancelQueries({
    //     queryKey: commentListQueryOption(articleId).queryKey,
    //   });

    //   const previousComments = queryClient.getQueryData(
    //     commentListQueryOption(articleId).queryKey,
    //   );

    //   queryClient.setQueryData(
    //     commentListQueryOption(articleId).queryKey,
    //     (old: any) => {
    //       return [...old, { ...comment, id: "temp-id-" + Date.now() }];
    //     },
    //   );

    //   return { previousComments };
    // },
    // onError: (err, newComment, context) => {
    //   // If the mutation fails, use the context returned from onMutate to roll back
    //   queryClient.setQueryData(
    //     commentListQueryOption(articleId).queryKey,
    //     context?.previousComments,
    //   );
    // },
    onMutate: () => form.reset(),
    onSuccess: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries({
        queryKey: commentListQueryOption(articleId).queryKey,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ content: values.content });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>댓글 입력</FormLabel>
              <FormControl>
                <Input
                  placeholder="댓글을 입력해주세요..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CommentForm;
