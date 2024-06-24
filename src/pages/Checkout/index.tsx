import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/Layout";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { cn, getCountriesForSelect } from "@/utils";
import FieldInput from "./FieldInput";
import FieldSelect from "./FieldSelect";
import { checkoutScheme } from "./checkoutScheme";
import ProductsTotal from "./ProductsTotal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { Circle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { CartProduct } from "@/features/cart/cartSlice";

const CheckoutPage = () => {
  const { toast } = useToast();
  const cartProducts = useSelector((state: RootState) => state.cart.products);
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
      paymentType: "directBankTransfer",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutScheme>) {
    toast({
      title: "Order submitted successfully! 🎉",
      description: `${values.firstName}, you ordered ${
        cartProducts.reduce((acc: CartProduct, prod: CartProduct) => ({
          quantity: acc.quantity + prod.quantity,
          productId: acc.productId,
        })).quantity
      } products`,
    });
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
                  <ProductsTotal />
                  <div>
                    <Accordion
                      type="single"
                      defaultValue="directBankTransfer"
                      className="space-y-2"
                      onValueChange={(value) =>
                        form.setValue(
                          "paymentType",
                          value as "directBankTransfer" | "cashOnDelivery",
                        )
                      }
                    >
                      <AccordionItem value="directBankTransfer">
                        <AccordionTrigger className="mb-2 flex items-center space-x-4 font-poppins text-base text-text-color">
                          <Circle
                            size={14}
                            className={cn(
                              "fill-text-color",
                              form.watch("paymentType") !==
                                "directBankTransfer" && "fill-transparent",
                            )}
                          />
                          <span>Direct Bank Transfer</span>
                        </AccordionTrigger>
                        <AccordionContent className="mb-4 font-poppinsLight text-base text-text-color-400">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cashOnDelivery">
                        <AccordionTrigger className="mb-2 flex items-center space-x-4 font-poppins text-base text-text-color">
                          <Circle
                            size={14}
                            className={cn(
                              "fill-text-color",
                              form.watch("paymentType") !== "cashOnDelivery" &&
                                "fill-transparent",
                            )}
                          />
                          <span>Cash On Delivery</span>
                        </AccordionTrigger>
                        <AccordionContent className="font-poppinsLight text-base text-text-color-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores rerum impedit dicta sed culpa distinctio
                          laudantium corrupti cumque totam eum.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
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
