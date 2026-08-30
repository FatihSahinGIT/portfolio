import { ProjectImage, ProjectImageSource } from './project.types';

type ResponsiveProjectImage = Omit<ProjectImage, 'srcset'> & {
  widths: readonly number[];
  srcsetBaseUrl?: string;
};

export function responsiveProjectImage({
  widths,
  srcsetBaseUrl,
  ...image
}: ResponsiveProjectImage): ProjectImage {
  return {
    ...image,
    srcset: widths.map((width) => ({
      url: imageUrlAtWidth(srcsetBaseUrl ?? image.url, width),
      width,
    })),
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
