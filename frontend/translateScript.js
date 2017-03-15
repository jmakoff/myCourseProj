app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en',{
        TITLE: 'Histogram analyse of signals!',
        URL_label: "Enter URL for request here:",
        TYPE_label: "Enter type of http request",
        SEND: 'Send request!',
        HISTOGRAMM: 'Histogramm',
        time: 'Time of request(ms)',
        count: 'Number of request',
        lang: 'Choose language',
        eng: 'English',
        ukr: 'Українська',
        POST_LABEL: 'Data for request here : ',
        info: 'Show detailized table',
        numberReq:'Number of the request',
        typeReq: 'Type of Request',
        timeReq: 'Answer time'


    })
    $translateProvider.translations('ua', {
        TITLE: 'Гістограмний аналіз сигналів!',
        URL_label: 'Введіть адрессу для запиту тут :',
        TYPE_label: 'Оберіть тип запиту',
        SEND: 'Надіслати запит!',
        HISTOGRAMM: 'Гістограмма',
        time: 'Час оброботки запиту(мс)',
        count: 'Порядковий номер запиту',
        lang: 'Оберіть мову',
        eng: 'English',
        ukr: 'Українська',
        POST_LABEL: 'Введіть дані що будуть передані у запиті : ',
        info: 'Показати детальну таблицю ',
        numberReq:'Номер запиту',
        typeReq: 'Тип запиту',
        timeReq: 'Час відповіді'


    })

    $translateProvider.preferredLanguage('ua');
    $translateProvider.fallbackLanguage('ua');
}])