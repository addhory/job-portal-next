import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  updateBenefits: (item: any) => void;
}

const formSchema = z.object({
  benefit: z
    .string({ required_error: "Benefit is required" })
    .min(3, "Min 3 characters"),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Min 10 characters"),
});

type TBenefitForm = z.infer<typeof formSchema>;

export default function DialogAddBenefit({ updateBenefits }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TBenefitForm>({
    resolver: zodResolver(formSchema),

    defaultValues: {},
  });
  const handleSaveBenefit = (data: TBenefitForm) => {
    // const benefit = benefitRef.current?.value;
    // const description = descriptionRef.current?.value;

    // if (benefit === "" || description === "") {
    //   return;
    // }

    updateBenefits({
      benefit: data.benefit,
      description: data.description,
    });
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, clicks save when your done
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 mb-5">
          <FormField
            control={control}
            name="benefit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Benefit</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter benefit"
                    {...field}
                    error={errors?.benefit?.message}
                  />
                </FormControl>

                {errors?.benefit && (
                  <FormMessage>{errors.benefit?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Benefit</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter description"
                    autoComplete="false"
                    error={errors?.description?.message}
                    {...field}
                  />
                </FormControl>

                {errors?.description && (
                  <FormMessage>{errors.description?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit(handleSaveBenefit)}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
