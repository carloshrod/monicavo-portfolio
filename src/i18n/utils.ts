import { labels } from './ui';

const defaultLang = 'es';
export const showDefaultLang = true;

export function useTranslations(lang: keyof typeof labels) {
	return function translate(
		key: keyof (typeof labels)[typeof defaultLang],
		b?: string,
	) {
		const value = labels[lang][key] || labels[defaultLang][key];
		return typeof value === 'function' && b ? value(b) : value;
	};
}

export function getLangFromUrl(url: URL) {
	const lang = url.pathname.split('/')[1];
	if (lang && lang in labels) {
		return lang as keyof typeof labels;
	}
	return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof labels) {
	return function translatePath(path: string, l: string = lang) {
		return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
	};
}
