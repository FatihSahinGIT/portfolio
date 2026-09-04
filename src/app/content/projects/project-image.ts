import { ProjectImage, ProjectImageSource } from './project.types';

type ResponsiveProjectImage = Omit<ProjectImage, 'srcset'> & {
  widths: readonly number[];
  srcsetBaseUrl?: string;
  originalUrl?: string;
  originalWidth?: number;
};

export function responsiveProjectImage({
  widths,
  srcsetBaseUrl,
  originalUrl,
  originalWidth,
  ...image
}: ResponsiveProjectImage): ProjectImage {
  const baseUrl = srcsetBaseUrl ?? image.url;

  return {
    ...image,
    srcset: [
      ...widths.map((width) => ({
        url: imageUrlAtWidth(baseUrl, width),
        width,
      })),
      ...(originalWidth ? [{ url: originalUrl ?? baseUrl, width: originalWidth }] : []),
    ],
  };
}

export function formatSrcset(srcset?: ProjectImageSource[]): string | null {
  return srcset?.map(({ url, width }) => `${url} ${width}w`).join(', ') ?? null;
}

function imageUrlAtWidth(url: string, width: number): string {
  const extensionIndex = url.lastIndexOf('.');

  if (extensionIndex === -1) {
    return `${url}-${width}`;
  }

  return `${url.slice(0, extensionIndex)}-${width}${url.slice(extensionIndex)}`;
}
