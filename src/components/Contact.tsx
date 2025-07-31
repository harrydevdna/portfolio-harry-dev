"use client";
import { CONTACT_CONTENT, CONTACT_INFORMATION } from "@/constants";
import { CheckCircle, CodeXml, Copy, Copyright, ExternalLink, Facebook, Github, Heart, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFORMATION.phoneNumber,
    href: `tel:${CONTACT_INFORMATION.phoneNumber}`,
    copyable: true,
    isCall: true,
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFORMATION.email,
    href: `mailto:${CONTACT_INFORMATION.email}`,
    copyable: true,
    color: "text-red-600 dark:text-red-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "harrydevdna",
    href: CONTACT_INFORMATION.linkedin,
    external: true,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "harrydevdna",
    href: CONTACT_INFORMATION.github,
    external: true,
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    icon: CodeXml,
    label: "LeetCode",
    value: "harrydevdna",
    href: CONTACT_INFORMATION.leetcode,
    external: true,
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "harrydevdna",
    href: CONTACT_INFORMATION.facebook,
    external: true,
    color: "text-blue-600 dark:text-blue-400",
  },
]

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast(`${field} copied to clipboard!`, {
        description: text,
        duration: 2000,
        action: {
          label: <span className="md:text-lg">Close</span>,
          onClick: () => toast.dismiss(),
        },
      })
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div id="contact" className="pt-18 md:pt-24 flex flex-col items-center justify-center gap-8 md:gap-12 max-w-5/6 mx-auto">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Contact me</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2'/>
      </div>

      <div className="text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 w-[90vw] md:w-[60vw] max-w-5xl">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedField === item.label;

            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 dark:hover:border-gray-200 hover:border-gray-500"
              >
                <CardContent className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 md:p-3 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-500 transition-colors ${item.color}`}
                      >
                        <Icon className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-base lg:text-xl text-start text-muted-foreground font-medium">{item.label}</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-semibold">{item.value}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {item.copyable && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(item.value, item.label)}
                          className={`lg:opacity-0 group-hover:opacity-100 transition-opacity ${isCopied ? '' : 'cursor-pointer'}`}
                        >
                          {isCopied ? (
                            <CheckCircle className="!w-6 !h-6 md:!w-7 md:!h-7 text-green-500" />
                          ) : (
                            <Copy className="!w-6 !h-6 md:!w-7 md:!h-7" />
                          )}
                        </Button>
                      )}

                      {(item.isCall || item.external) && 
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="lg:opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {item.external && <ExternalLink className="!w-6 !h-6 md:!w-7 md:!h-7"/>}
                            {item.isCall && <Phone className="!w-6 !h-6 md:!w-7 md:!h-7"/>}
                          </Link>
                        </Button>
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="text-center max-w-2xl">
        <h3 className="text-xl md:text-3xl font-semibold mb-4">{CONTACT_CONTENT.title}</h3>
        <p className="text-muted-foreground md:text-lg">{CONTACT_CONTENT.content}</p>
      </div>

      <div className="bg-cyan-100 dark:bg-gray-800 text-center w-[100vw] py-4 md:py-6 font-medium text-sm md:text-base">
        <p>
          <Copyright className="inline w-4 h-4 mr-1" />
          <span>{new Date().getFullYear()} • Made with <Heart className="inline w-4 h-4 text-red-500" /> by Huynh Van Phuot (Harry Dev)</span>
        </p>
        <p>All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Contact;
