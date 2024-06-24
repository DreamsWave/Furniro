import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/Layout";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { getCountriesForSelect } from "@/utils";
import FieldInput from "./FieldInput";
import { useEffect } from "react";
import FieldSelect from "./FieldSelect";
import { checkoutScheme } from "./checkoutScheme";

const CheckoutPage = () => {
  const form = useForm<z.infer<typeof checkoutScheme>>({
    resolver: zodResolver(checkoutScheme),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      street: "",
      city: "",
      province: "",
      zipcode: "",
      phone: "",
      email: "",
      additional: "",
      // paymentType: "directBankTransfer",
    },
  });

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  function onSubmit(values: z.infer<typeof checkoutScheme>) {
    console.log(values);
  }

  return (
    <Layout pageTitle="Checkout" showBenefits>
      <Hero title="Checkout" heroName="Checkout" />

      <section className="mb-12">
        <div className="container-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
                <div className="space-y-8 p-16">
                  <h2 className="font-poppinsSemibold text-4xl">
                    Billing details
                  </h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <FieldInput
                      formControl={form.control}
                      label="First Name"
                      name="firstName"
                    />
                    <FieldInput
                      formControl={form.control}
                      label="Last Name"
                      name="lastName"
                    />
                  </div>
                  <FieldInput
                    formControl={form.control}
                    label="Company Name(Optional)"
                    name="companyName"
                  />
                  <FieldSelect
                    formControl={form.control}
                    label="Country / Region"
                    name="country"
                    placeholder={"Sri Lanka"}
                    values={getCountriesForSelect()}
                    onSelect={(value) => form.setValue("country", value)}
                  />
                  <FieldInput
                    formControl={form.control}
                    label="Street address"
                    name="street"
                  />
                  <FieldInput
                    formControl={form.control}
                    label="Town / City"
                    name="city"
                  />
                  <FieldSelect
                    formControl={form.control}
                    label="Province"
                    name="province"
                    placeholder={"Western Province"}
                    values={getCountriesForSelect()}
                    onSelect={(value) => form.setValue("province", value)}
                  />
                  <FieldInput
                    formControl={form.control}
                    label="ZIP code"
                    name="zipcode"
                  />
                  <FieldInput
                    formControl={form.control}
                    label="Phone"
                    name="phone"
                  />
                  <FieldInput
                    formControl={form.control}
                    label="Email address"
                    name="email"
                  />
                  <FieldInput
                    formControl={form.control}
                    name="additional"
                    placeholder="Additional information"
                  />
                </div>
                <div className="space-y-8 p-16">
                  <Button type="submit">Place order</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
