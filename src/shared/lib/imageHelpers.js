import { API_CONFIG, IMAGE_SIZES } from '../config/api.config';

export const getImageUrl = (path, type = 'poster', size = 'medium') => {
    if (!path) return null;

    const imageSize = IMAGE_SIZES[type]?.[size] || IMAGE_SIZES.poster.medium;
    return `${API_CONFIG.imageBaseURL}/${imageSize}${path}`;
};

export const getPosterUrl = (path, size = 'medium') => {
    return getImageUrl(path, 'poster', size);
};

export const getBackdropUrl = (path, size = 'medium') => {
    return getImageUrl(path, 'backdrop', size);
};
