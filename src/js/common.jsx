/**
 * Common functions used across the application.
 */

import messages_de from "../lang/de.json";
import messages_en from "../lang/en.json";

/**
 * Returns a collection of all text translated to the current locale or
 * in English, if the current locale is not supported.
 */
export function getTranslationsForCurrentLocale(){
    // Get current locale without region code (e.g. "en" instead of "en_GB")
    const language = navigator.language.split(/[-_]/)[0];
    if (language === 'de'){
        return messages_de
    } else {
        return messages_en
    }
}

/**
 * Returns the current locale without region code (e.g. "en" in case of "en_GB").
 */
export function getCurrentLocale(){
    return navigator.language.split(/[-_]/)[0];
}
