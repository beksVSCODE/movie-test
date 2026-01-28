import { API_CONFIG, IMAGE_SIZES } from '../config/api.config';

type ImageType = 'poster' | 'backdrop';
type ImageSize = 'small' | 'medium' | 'large' | 'original';

export const getImageUrl = (
  path: string | null,
  type: ImageType = 'poster',
  size: ImageSize = 'medium'
): string | null => {
  if (!path) return null;
  
  const imageSize = IMAGE_SIZES[type]?.[size] || IMAGE_SIZES.poster.medium;
  return `${API_CONFIG.imageBaseURL}/${imageSize}${path}`;
};

export const getPosterUrl = (path: string | null, size: ImageSize = 'medium'): string | null => {
  return getImageUrl(path, 'poster', size);
};

export const getBackdropUrl = (path: string | null, size: ImageSize = 'medium'): string | null => {
  return getImageUrl(path, 'backdrop', size);
};
