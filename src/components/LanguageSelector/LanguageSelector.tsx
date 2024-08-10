import i18n from "../../i18n"

export function LanguageSelector() {
    const onLanguageClick = (countryCode: string): void => {
        i18n.changeLanguage(countryCode);
    }
    const toggleDisplay = (countryCode: string): void => {
        const allLanguages = ['en', 'pl']; // Add other language codes here as needed
        allLanguages.forEach(code => {
            const elements = document.querySelectorAll(`.${code}`);
            elements.forEach(el => {
                const htmlElement = el as HTMLElement;  // Cast to HTMLElement
                if (code === countryCode) {
                    htmlElement.style.display = 'none';
                } else {
                    htmlElement.style.display = 'block';
                }
            });
        });
    };
    
    return (
        <>
        <button className="btn en" style={{display: 'none'}} onClick={() => {onLanguageClick('en');toggleDisplay('en')}}>🇬🇧</button>
        <button className="btn pl" onClick={() => {onLanguageClick('pl');toggleDisplay('pl')}}>🇵🇱</button>
        </>
    )
}