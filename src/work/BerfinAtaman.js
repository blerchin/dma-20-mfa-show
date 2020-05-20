import React from "react";
import Seo from "../Components/Seo";

export default function (config) {
  return (
    <>
      <Seo
        title={config.config.name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={config.config.slug}
      />
      <h3>The wonderful work of Berfin Ataman</h3>
    </>
  );
}
