import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import TextInput from "./NewPatient/TextInput";
import { Mail } from "lucide-react";
import PrimaryButton from "./MainPage/PrimaryButton";
import { adminLoginFormSchema } from "@/schemas/adminLoginFormSchema";
import { AdminLogin } from "@/interfaces/AdminLogin.interface";
import { submitAdminPageForm } from "@/utils/submitAdminPageForm";
import { useState } from "react";

const AdminLoginForm = () => {
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  const form = useForm<z.infer<typeof adminLoginFormSchema>>({
    resolver: zodResolver(adminLoginFormSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<AdminLogin> = async (data: AdminLogin) => {
    await submitAdminPageForm(data, router, setIsWrongPassword);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 pt-[84px]"
      >
        {/* Email address */}
        <TextInput<AdminLogin>
          control={form.control}
          name="email"
          label="Email address"
          placeholder="john_doe@gmail.com"
          icon={Mail}
          isWrongField={isWrongPassword}
          invalidInputFieldMessage="Wrong email or password"
        />
        {/* Password */}
        <TextInput<AdminLogin>
          control={form.control}
          name="password"
          label="Password"
          placeholder="********"
          icon={Mail}
          type="password"
          isWrongField={isWrongPassword}
          invalidInputFieldMessage="Wrong email or password"
        />
        {/* Submit */}
        <div className="pt-10">
          <PrimaryButton type="submit">Login</PrimaryButton>
        </div>
      </form>
    </FormProvider>
  );
};
export default AdminLoginForm;
