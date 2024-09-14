import { LocaleConfig } from 'react-native-calendars';

const defineLocale = () => {
    LocaleConfig.locales['ua'] = {
        monthNames: [
            'Січень',
            'Лютий',
            'Березень',
            'Квітень',
            'Травень',
            'Червень',
            'Липень',
            'Серпень',
            'Вересень',
            'Жовтень',
            'Листопад',
            'Грудень',
        ],
        monthNamesShort: [
            'Січ.',
            'Лют.',
            'Бер.',
            'Квіт.',
            'Трав.',
            'Черв.',
            'Лип.',
            'Серп.',
            'Вер.',
            'Жовт.',
            'Лист.',
            'Груд.',
        ],
        dayNames: [
            'Неділя',
            'Понеділок',
            'Вівторок',
            'Середа',
            'Четвер',
            'П’ятниця',
            'Субота',
        ],
        dayNamesShort: [
            'Нед.',
            'Пон.',
            'Вів.',
            'Сер.',
            'Чет.',
            'П’ят.',
            'Суб.',
        ],
        today: 'Сьогодні',
    };
    LocaleConfig.locales.en = LocaleConfig.locales[''];
};

export default defineLocale;
