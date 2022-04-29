module.exports = {
    title: 'Webbutveckling 1-2',
    lang: 'sv',
    path: process.env.NODE_ENV === 'production' ? '/wu-exempel' : '',
    navigation: {
        brand: {
            title: 'Webbutveckling 1-2',
            icon: 'web',
        },
        menu: {
            items: [
                {
                    title: 'Start',
                },
                {
                    title: 'Dropdown',
                    dropdown: true,
                    children: [
                        {
                            title: 'Dropdown 1',
                            url: '#'
                        },
                        {
                            title: 'Dropdown 2',
                            url: '#'
                        },
                    ]
                },
                // {
                //     title: 'Exempel',
                //     dropdown: true,
                //     collection: 'pages',
                // },
            ],
        },
    },
};
