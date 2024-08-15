declare type CodeEditorProps = {
  code: string;
  codeLanguage: string;
  setCodeLanguage?: React.Dispatch<React.SetStateAction<string>>;
  codeChangeHandler?: (code: string) => void;
  editable?: boolean;
  copyCode?: boolean
  className?: string;
};

declare type LanguageSelectProps = {
  language: string;
  setLanguage?: React.Dispatch<React.SetStateAction<string>>;
  className?: string
};
