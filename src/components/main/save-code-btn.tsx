"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader, LoaderCircle } from "lucide-react";

const SaveCodeButton = ({
  btnText = "save",
  submitHandler,
  className,
}: {
  btnText?: string;
  submitHandler: () => Promise<void>;
  className?: string;
}) => {
  const [saving, setSaving] = useState(false);

  const onSubmit = async () => {
    setSaving(true);
    await submitHandler();
    setSaving(false);
  };

  return (
    <Button className={cn("", className)} onClick={onSubmit} disabled={saving}>
      {saving && <span><LoaderCircle className="animate-spin h-5 w-5" /></span>}{btnText}
    </Button>
  );
};

export default SaveCodeButton;
