"use client";

import { Button } from "@/components/ui/button";
/* eslint-disable @next/next/no-img-element */
import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";

// Check for environment variables
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!publicKey || !urlEndpoint) {
  console.error("ImageKit publicKey or urlEndpoint is not set.");
}

// Define authenticator function for ImageKit authentication
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    } else {
      throw new Error("Authentication request failed");
    }
  }
};

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  return (
    <div className="App">
      <Button variant={"destructive"}>Click me</Button>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        {/* Image with fill option and transformation */}
        {name && (
          <IKImage
            path={name}
            transformation={[
              { height: "300", width: "400" },
              { raw: "l-text,i-hello world,fs-32,l-end" },
            ]}
            alt="Alt text"
          />
        )}

        <div>
          <h2>File Upload</h2>
          <IKUpload
            fileName="test-upload.png"
            onError={(error) => {
              console.log("Upload error:", error);
            }}
            onSuccess={(response) => {
              console.log("Upload success:", response);
              setName(response.filePath);
            }}
          />
        </div>
      </ImageKitProvider>
    </div>
  );
}
