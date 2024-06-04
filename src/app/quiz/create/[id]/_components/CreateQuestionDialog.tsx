import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import { Copy } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddQuestion } from "@/hooks/quiz/useAddQuestion";
import { useRouter } from "next/navigation";

const questionSchema = z.object({
  question: z.string().nonempty(),
  option1: z.string().nonempty(),
  option2: z.string().nonempty(),
  option3: z.string().nonempty(),
  option4: z.string().nonempty(),
  answer: z.string().nonempty(),
});

export default function CreateQuestionDialog({ quizId }: { quizId: string }) {
  const { addQuestion, loading, error } = useAddQuestion();
  const [isOpen, setIsOpen] = React.useState(true);
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  });

  function onSubmit(values: z.infer<typeof questionSchema>) {
    addQuestion(quizId, values.question, [
      { text: values.option1, isCorrect: values.answer === "1" },
      { text: values.option2, isCorrect: values.answer === "2" },
      { text: values.option3, isCorrect: values.answer === "3" },
      { text: values.option4, isCorrect: values.answer === "4" },
    ]);
    setIsOpen(false);
  }

  return (
    isOpen && (
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="w-full flex items-center">
          <DialogTitle>Create a new question</DialogTitle>
        </DialogHeader>
        {error && (
          <DialogDescription className="text-red-500">
            {error}
          </DialogDescription>
        )}
        <div>
          <Form {...form}>
            <div className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option 1</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option 2</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option 3</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option 4</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Answer</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select correct answer option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Option 1</SelectItem>
                        <SelectItem value="2">Option 2</SelectItem>
                        <SelectItem value="3">Option 3</SelectItem>
                        <SelectItem value="4">Option 4</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 pt-8"
            >
              <Button type="submit" disabled={loading}>
                {loading ? "Loading" : "Create"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    )
  );
}
