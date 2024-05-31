import {
  DocumentRenderer as KeystaticRenderer,
  DocumentRendererProps,
} from "@keystatic/core/renderer";
import { InferRenderersForComponentBlocks } from "@keystatic/core";

import { CloudImage } from "../../../../../../references/keystatic-examples-knowledge-base/src/components/cloud-image";
import { componentBlocks } from "../../../../../../references/keystatic-examples-knowledge-base/keystatic.config";

export default async function DocumentRenderer({
  document,
}: DocumentRendererProps) {
  return (
    <KeystaticRenderer
      document={document}
      componentBlocks={componentBlockRenderers}
    />
  );
}

const componentBlockRenderers: InferRenderersForComponentBlocks<
  typeof componentBlocks
> = {
  "cloud-image": CloudImage,
};
