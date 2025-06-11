"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  acceptedTypes?: string;
  maxSize?: number; // in MB
  className?: string;
}

const FileUpload = ({
  onFileChange,
  acceptedTypes = ".pdf,.doc,.docx",
  maxSize = 10,
  className,
}: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Check file type
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    const allowedTypes = acceptedTypes.toLowerCase().split(",");
    if (!allowedTypes.includes(fileExtension)) {
      alert(
        `Please upload a file with one of these extensions: ${acceptedTypes}`
      );
      return;
    }

    setSelectedFile(file);
    onFileChange(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className={cn("mt-1", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        onChange={handleInputChange}
        className="hidden"
      />

      {!selectedFile ? (
        <div
          className={cn(
            "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-colors",
            dragActive && "border-hope-green-500 bg-hope-green-50",
            "hover:border-hope-green-400 hover:bg-hope-green-50"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium text-hope-green-600">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500">
            {acceptedTypes.toUpperCase()} up to {maxSize}MB
          </p>
        </div>
      ) : (
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-hope-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
