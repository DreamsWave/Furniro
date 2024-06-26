import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Clock4, MapPin, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactsScheme } from "./contactsScheme";
import { Form } from "@/components/ui/form";
import FieldInput from "@/components/FieldInput";
import Button from "@/components/Button";
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const form = useForm<z.infer<typeof contactsScheme>>({
    resolver: zodResolver(contactsScheme),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Message sent successfully! 🎉",
    });
  }

  return (
    <Layout pageTitle="Contacts" showBenefits>
      <Hero heroName="Contacts" title="Contacts" />
      <div className="container-sm mb-16 max-w-[1100px]">
        <div className="mx-auto mb-24 mt-24 max-w-[640px] text-center">
          <h2 className="mb-4 font-poppinsSemibold text-4xl text-text-color">
            Get In Touch With Us
          </h2>
          <p className="font-poppins text-base text-text-color-400">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ul className="mb-10 grid h-fit grid-cols-1 items-baseline justify-center gap-10 sm:grid-cols-3 sm:items-start md:grid-cols-1">
            <li className="flex h-fit max-w-[300px] items-center gap-6">
              <div>
                <MapPin size={28} className="fill-text-color stroke-white" />
              </div>
              <div>
                <h3 className="font-poppinsMedium text-2xl text-text-color">
                  Address
                </h3>
                <p className="font-poppins text-base text-text-color">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </li>
            <li className="flex h-fit max-w-[300px] items-center gap-6">
              <div>
                <Phone size={28} className="fill-text-color" />
              </div>
              <div>
                <h3 className="font-poppinsMedium text-2xl text-text-color">
                  Phone
                </h3>
                <p className="font-poppins text-base text-text-color">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </li>
            <li className="flex h-fit max-w-[300px] items-center gap-6">
              <div>
                <Clock4 size={28} className="fill-text-color stroke-white" />
              </div>
              <div>
                <h3 className="font-poppinsMedium text-2xl text-text-color">
                  Working Time
                </h3>
                <p className="font-poppins text-base text-text-color">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </li>
          </ul>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FieldInput
                name="name"
                formControl={form.control}
                label="Your name"
                placeholder="Abc"
              />
              <FieldInput
                name="email"
                formControl={form.control}
                label="Email address"
                placeholder="Abc@def.com"
              />
              <FieldInput
                name="subject"
                formControl={form.control}
                label="Subject"
                placeholder="This is an optional"
              />
              <FieldInput
                name="message"
                formControl={form.control}
                label="Message"
                placeholder="Hi!, I'd like to ask about ..."
                multiline
              />
              <Button
                type="submit"
                className="w-full justify-center rounded-md px-20 py-3 font-poppins text-base capitalize md:w-fit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
