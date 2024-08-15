"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import CodeView from "./code-view";
// import { useUser } from "@clerk/nextjs";
import SaveCodeButton from "../main/save-code-btn";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  inserSnippetAction,
  updateSnippetAction,
} from "@/lib/actions/snippet.actions";
import { useModal } from "@/providers/modal-provider";
import { useRouter } from "next/navigation";

interface FormFields {
  title: string;
  description: string;
  isPublic: boolean;
  language: string;
  code: string;
}

export interface SnippetFormProps {
  id?: string;
  editForm?: boolean;
  formValues?: FormFields;
  className?: string;
  contentClassName?: string;
  formSavehandler?: (values: any) => Promise<void>;
}

const defaultFormValues = {
  title: "",
  description: "",
  isPublic: true,
  language: "typescript",
  code: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`,
};

const SnippetForm = ({
  id,
  editForm = false,
  formValues = defaultFormValues,
  className,
  contentClassName,
  formSavehandler,
}: SnippetFormProps) => {
  const user = useUser();
  const router = useRouter()
  const closeModal = useModal(state => state.closeModal)

  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(formValues.title);
  const [description, setDescription] = useState(formValues.description);
  const [isPublic, setIsPublic] = useState(formValues.isPublic);

  const [language, setLanguage] = useState(formValues.language);
  const [code, setCode] = useState(formValues.code);

  const tabContentClassName = cn("h-full", contentClassName);

  const insertData = async () => {
    await inserSnippetAction({
      clerkId: user.user?.id as string,
      title,
      description,
      isPublic,
      tags: "",
      codeLanguage: language,
      codeValue: code,
      username: user.user?.username as string,
    });
    router.push("/browse")
  };

  const updateData = async () => {
    await updateSnippetAction(id!, {
      title,
      description,
      isPublic,
      tags: "",
      codeLanguage: language,
      codeValue: code,
    });
    closeModal()
  };

  return (
    <>
      <Tabs
        defaultValue="details"
        className={cn("flex flex-col h-full w-full", className)}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className={tabContentClassName}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="eg. async/await request with fetch"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="eg. efficiently fetch data using async/await in your code."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox
                id="public"
                checked={isPublic}
                onCheckedChange={(checked) => setIsPublic(checked as boolean)}
              />
              <div className="grid leading-none">
                <label
                  htmlFor="public"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Public
                </label>
                <p className="text-sm text-muted-foreground">
                  Let everyone see your contribution.
                </p>
              </div>
            </div>
            <SaveCodeButton
              btnText={editForm ? "update": "save"}
              className="mt-2 justify-self-end"
              submitHandler={editForm ? updateData : insertData}
            />
          </div>
        </TabsContent>
        <TabsContent value="code" className={tabContentClassName}>
          <div className="flex flex-col w-full h-[calc(100%-50px)]">
            <CodeView
              code={code}
              language={language}
              setCode={setCode}
              setLanguage={setLanguage}
              editable
            />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SnippetForm;
